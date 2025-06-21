using System;

public class SearchFunctions
{
    // Linear Search
    public static Product LinearSearch(Product[] products, string name)
    {
        foreach (Product product in products)
        {
            if (product.ProductName.Equals(name, StringComparison.OrdinalIgnoreCase))
            {
                return product;
            }
        }
        return null;
    }

    // Binary Search (Assumes sorted array)
    public static Product BinarySearch(Product[] products, string name)
    {
        int low = 0;
        int high = products.Length - 1;

        while (low <= high)
        {
            int mid = (low + high) / 2;
            int comparison = string.Compare(name, products[mid].ProductName, StringComparison.OrdinalIgnoreCase);

            if (comparison == 0)
                return products[mid];
            else if (comparison < 0)
                high = mid - 1;
            else
                low = mid + 1;
        }
        return null;
    }
}
