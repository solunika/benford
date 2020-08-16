
const bPercentages = [0, 0.301, 0.176, 0.125, 0.097, 0.079, 0.067, 0.058, 0.051, 0.046]; // (Math.log10(n + 1) - Math.log10(n)), on constants for speed
let calculateBenford = function (data)
{    
    const firstDigits = data.map(function (item, index, array)
    {
        return item.toString()[0];
    });

    let results = [];
    const firstDigitFrequencies = getDigitsFrequencies(firstDigits);

    let dataFrequency;
    let dataFrequencyPercent;
    let BenfordFrequency;
    let BenfordFrequencyPercent;
    let differenceFrequency;
    let differenceFrequencyPercent;

    for(let n = 1; n <= 9; n++)
    {
        
        dataFrequency = firstDigitFrequencies[n];
        dataFrequencyPercent = dataFrequency / data.length;
        BenfordFrequency = data.length * bPercentages[n];
        
        BenfordFrequencyPercent = bPercentages[n];
        differenceFrequency = dataFrequency - BenfordFrequency;
        differenceFrequencyPercent = dataFrequencyPercent - BenfordFrequencyPercent;

        results.push({"n": n,
                        "dataFrequency":              dataFrequency,
                        "dataFrequencyPercent":       dataFrequencyPercent,
                        "BenfordFrequency":           BenfordFrequency,
                        "BenfordFrequencyPercent":    BenfordFrequencyPercent,
                        "differenceFrequency":        differenceFrequency,
                        "differenceFrequencyPercent": differenceFrequencyPercent});
    }

    return results;
}

function getDigitsFrequencies(firstDigits)
{
    const digitCounts = Array(10).fill(0);

    for(let n of firstDigits)
    {
        digitCounts[n]++;
    }

    return digitCounts;
}


module.exports = {
    calculateBenford:calculateBenford
}