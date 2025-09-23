### `README.md`

```markdown
# Regex Data Extraction

A small web application that uses Regular Expressions (Regex) to extract specific types of data from any block of text.

## Features
This tool can detect and extract:
- Email addresses (e.g., `user@example.com`)
- URLs (e.g., `https://www.example.com`)
- Phone numbers (e.g., `(123) 456-7890`)
- Credit card numbers (e.g., `1234 5678 9012 3456`)
- Time formats (12-hour and 24-hour, e.g., `2:30 PM`, `14:30`)
- HTML tags (e.g., `<div>`, `<p>`)
- Hashtags (e.g., `#LaunchDay`)
- Currency amounts (e.g., `$19.99`, `$1,234.56`)

## How to Run
1. Clone the repository:


git clone [https://github.com/alu\_regex-data-extraction-julesineza.git](https://github.com/alu_regex-data-extraction-julesineza.git)


2. Open `index.html` in any modern browser.  
3. Paste or type your test data into the textarea.  
4. Click **Extract Data** to see all matches neatly organized.

## Sample Input
Paste the text below into the application:


Hello team,

Please reach me at [user@example.com](mailto:user@example.com) or [firstname.lastname@company.co.uk](mailto:firstname.lastname@company.co.uk) for updates.
Visit [https://www.example.com](https://www.example.com) or [https://subdomain.example.org/page](https://subdomain.example.org/page).
Call me at (123) 456-7890 or 123-456-7890.
Use card 1234 5678 9012 3456 for payments.
The meeting starts at 2:30 PM or 14:30.
Here is a snippet: <div class="example"><p>Hello!</p></div>
Tag the event with #LaunchDay.
Budget estimate: \$19.99 for snacks, \$1,234.56 for equipment.



## Sample Output
When you click **Extract Data**, the results are displayed inside a scrollable results panel:

| Category         | Matches                                                                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Emails           | user@example.com, firstname.lastname@company.co.uk                                                                           |
| URLs             | https://www.example.com, https://subdomain.example.org/page                                                                   |
| PhoneNumbers     | (123) 456-7890, 123-456-7890                                                                                                 |
| CreditCards      | 1234 5678 9012 3456                                                                                                          |
| Times            | 2:30 PM, 14:30                                                                                                               |
| HTMLTags         | `<div class="example">`, `<p>`, `</p>`, `</div>`                                                                             |
| Hashtags         | #LaunchDay                                                                                                                   |
| Currency         | $19.99, $1,234.56                                                                                                            |

## Repository Structure


alu\_regex-data-extraction-{YourUsername}/
│
├─ index.html   # Main web page
├─ style.css    # Styling for the web app
├─ script.js    # Regex extraction logic
└─ README.md    # Project overview and instructions



## Notes
- All patterns are written to handle multiple matches in a single text block.  
- Edge cases (like malformed input) are handled gracefully by simply returning no matches.  
- Works entirely in the browser with no external dependencies.


