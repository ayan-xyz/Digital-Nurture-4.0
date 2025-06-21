using System;

class FinancialForecast
{
    // Recursive function to calculate future value
    public static double PredictFutureValue(int year, double initialValue, double growthRate)
    {
        if (year == 0)
            return initialValue;

        return PredictFutureValue(year - 1, initialValue, growthRate) * (1 + growthRate);
    }

    static void Main(string[] args)
    {
        double initialValue = 1000;     // Starting value
        double growthRate = 0.08;       // 8% annual growth
        int targetYear = 5;             // Predict for year 5

        double result = PredictFutureValue(targetYear, initialValue, growthRate);
        Console.WriteLine($"Predicted value after {targetYear} years: {result:F2}");
    }
}
