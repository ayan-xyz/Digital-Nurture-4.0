import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

class Product {
    int productId;
    String productName;
    String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    @Override
    public String toString() {
        return productId + ": " + productName + " (" + category + ")";
    }
}

public class ECommerceSearch {

    // Linear Search: O(n)
    public static Product linearSearch(Product[] products, String name) {
        for (Product p : products) {
            if (p.productName.equalsIgnoreCase(name)) {
                return p;
            }
        }
        return null;
    }

    // Binary Search: O(log n)
    public static Product binarySearch(Product[] products, String name) {
        int low = 0, high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;
            int cmp = products[mid].productName.compareToIgnoreCase(name);

            if (cmp == 0)
                return products[mid];
            else if (cmp < 0)
                low = mid + 1;
            else
                high = mid - 1;
        }
        return null;
    }

    public static void main(String[] args) {
        // Sample product data
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "T-Shirt", "Clothing"),
            new Product(103, "Smartphone", "Electronics"),
            new Product(104, "Shoes", "Footwear"),
            new Product(105, "Watch", "Accessories")
        };

        Scanner sc = new Scanner(System.in);

        // Sorting for Binary Search
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));

        System.out.println("Enter product name to search:");
        String searchName = sc.nextLine();

        // Linear Search
        System.out.println("\n--- Linear Search ---");
        Product result1 = linearSearch(products, searchName);
        if (result1 != null)
            System.out.println("Product found: " + result1);
        else
            System.out.println("Product not found.");

        // Binary Search
        System.out.println("\n--- Binary Search ---");
        Product result2 = binarySearch(products, searchName);
        if (result2 != null)
            System.out.println("Product found: " + result2);
        else
            System.out.println("Product not found.");

        sc.close();
    }
}
