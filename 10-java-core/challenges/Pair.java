package challenges;
import java.util.Objects;

public class Pair<K, V> {

    private K key;
    private V value;

    
    public Pair(K key, V value) {
        this.key = key;
        this.value = value;
    }

    
    public K getKey() {
        return key;
    }

    
    public V getValue() {
        return value;
    }

    
    public Pair<V, K> swap() {
        return new Pair<>(value, key);
    }

   
    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;

        if (obj == null || getClass() != obj.getClass())
            return false;

        Pair<?, ?> other = (Pair<?, ?>) obj;
        return Objects.equals(key, other.key) &&
               Objects.equals(value, other.value);
    }

    
    @Override
    public int hashCode() {
        return Objects.hash(key, value);
    }

    
    @Override
    public String toString() {
        return "Pair(" + key + ", " + value + ")";
    }

    public static void main(String[] args) {

        Pair<String, Integer> pair = new Pair<>("age", 25);

        System.out.println(pair.getKey());     
        System.out.println(pair.getValue());   

        Pair<Integer, String> swapped = pair.swap();
        System.out.println(swapped);            

    
        Pair<String, Integer> pair2 = new Pair<>("age", 25);
        System.out.println(pair.equals(pair2));
    }
}

