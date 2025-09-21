import re

# Sample text (load from a file or API in a real scenario)
sample_text = """
Contact me at user@example.com or firstname.lastname@company.co.uk
Visit https://www.example.com or https://sub.example.org/page
Call (123) 456-7890 or 123-456-7890 or 123.456.7890
Credit cards: 1234 5678 9012 3456 or 1234-5678-9012-3456
Meeting at 14:30 or 2:30 PM
HTML tags: <p> <div class="example"> <img src="image.jpg" alt="description">
Hashtags: #example #ThisIsAHashtag
Prices: $19.99 $1,234.56
"""

patterns = {
    "Emails": r'[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}',
    "URLs": r'https?://[^\s]+',
    "Phone Numbers": r'\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}',
    "Credit Cards": r'\b(?:\d{4}[-\s]?){3}\d{4}\b',
    "Time (24h)": r'\b([01]\d|2[0-3]):[0-5]\d\b',
    "Time (12h)": r'\b(0?[1-9]|1[0-2]):[0-5]\d\s?(AM|PM|am|pm)\b',
    "HTML Tags": r'<[^>]+>',
    "Hashtags": r'#[A-Za-z0-9_]+',
    "Currency": r'\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?'
}

def extract_data(text, patterns):
    results = {}
    for key, pattern in patterns.items():
        matches = re.findall(pattern, text)
        results[key] = matches
    return results

if __name__ == "__main__":
    results = extract_data(sample_text, patterns)
    for category, matches in results.items():
        print(f"\n{category}:")
        for m in matches:
            # re.findall can return tuples when groups are used -> join if needed
            print(" ", m if isinstance(m, str) else " ".join(m))
