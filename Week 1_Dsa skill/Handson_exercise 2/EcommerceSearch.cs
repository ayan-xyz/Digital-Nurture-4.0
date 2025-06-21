using System;
using System.Linq;

public class EcommerceSearch
{
    public static void Main()
    {
        Product[] products = new Product[]
        {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shoes", "Footwear"),
            new Product(103, "Smartphone", "Electronics"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "Tablet", "Electronics")
        };

        // Linear Search (unsorted)
        Console.WriteLine("🔍 Linear Search Result:");
        Product foundLinear = SearchFunctions.LinearSearch(products, "Watch");
        Console.WriteLine(foundLinear != null ? foundLinear.ToString() : "Product not found");

        // Sort array by ProductName for Binary Search
        products = products.OrderBy(p => p.ProductName.ToLower()).ToArray();

        // Binary Search (sorted)
        Console.WriteLine("\n🔍 Binary Search Result:");
        Product foundBinary = SearchFunctions.BinarySearch(products, "Watch");
        Console.WriteLine(foundBinary != null ? foundBinary.ToString() : "Product not found");
    }
}
