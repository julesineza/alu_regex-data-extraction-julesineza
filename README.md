```markdown
# ALU Regex Data Extraction (Python)

This project uses **Python Regular Expressions (Regex)** to extract different types of data
from a block of text.  
It demonstrates how to search for multiple patterns such as emails, URLs, phone numbers,
credit card numbers, times, HTML tags, hashtags, and currency amounts.

---

## Features

The script scans a sample text and finds:

- **Emails** – e.g. `user@example.com`
- **URLs** – e.g. `https://www.example.com`
- **Phone Numbers** – e.g. `(123) 456-7890`, `123-456-7890`
- **Credit Cards** – e.g. `1234 5678 9012 3456`
- **Time (24-hour)** – e.g. `14:30`
- **Time (12-hour)** – e.g. `2:30 PM`
- **HTML Tags** – e.g. `<p>`, `<img src="image.jpg">`
- **Hashtags** – e.g. `#example`
- **Currency** – e.g. `$19.99`, `$1,234.56`

---

## Technology

- **Language:** Python 3.x
- **Modules:** `re` (built-in)

No third-party packages are required.

---

##File Overview
```

main.py # Contains all code: patterns, sample text, extraction function, and output
README.md # This documentation

````

---

##How to Run

1. **Install Python 3** if not already installed:
2. **Clone or download** this repository:
```bash
git clone https://github.com/julesineza/alu_regex-data-extraction-julesineza.git
cd alu_regex-data-extraction-<your-username>
````

3. **Run the script**:

```bash
python main.py
```

The program will:

- Load the built-in sample text.
- Apply all regex patterns.
- Print all matches grouped by category.

---

## 💡 Using Your Own Text

Replace the `sample_text` variable inside **main.py** with any text you want to search.

Example:

```python
sample_text = """
Contact me at help@mydomain.org
Visit https://mydomain.org
"""
```

Run the script again to see matches from your custom text.

---

## Example Output

```
Emails:
  user@example.com
  firstname.lastname@company.co.uk

URLs:
  https://www.example.com
  https://sub.example.org/page

Phone Numbers:
  (123) 456-7890
  123-456-7890
  123.456.7890

...
```

---

## Key Points

- **`re.findall`** is used to return all matches for each pattern.
- Patterns handle multiple formats (e.g., phone numbers with dots, dashes, or parentheses).
- The `if __name__ == "__main__":` block ensures the code runs only when executed directly.

---

## Author

- Jules Ineza

```

---
**Instructions**:

```
