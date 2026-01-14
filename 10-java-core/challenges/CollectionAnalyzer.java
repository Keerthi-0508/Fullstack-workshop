package challenges;
import java.util.*;
import java.util.stream.Collectors;

public class CollectionAnalyzer {

    
    public static Map<Integer, List<String>> groupByLength(List<String> words) {
        return words.stream()
                .collect(Collectors.groupingBy(String::length));
    }

    
    public static Map<Character, Long> charFrequency(List<String> words) {
        return words.stream()
                .flatMap(word -> word.chars().mapToObj(c -> (char) c))
                .collect(Collectors.groupingBy(
                        c -> c,
                        Collectors.counting()
                ));
    }

    public static void main(String[] args) {

        List<String> list1 = Arrays.asList("hi", "bye", "hello", "ok");
        System.out.println(groupByLength(list1));
        

        List<String> list2 = Arrays.asList("aab", "bc");
        System.out.println(charFrequency(list2));
        
    }
}

