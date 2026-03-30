import sys

def calculate_difficulty(keyword):
    """
    Simulates keyword difficulty scoring based on length and common modifiers.
    A more robust version would integrate with SEO APIs like SEMRush or Ahrefs.
    """
    length = len(keyword)
    if length < 10:
        return 80  # Short tail, likely high competition
    elif length > 25:
        return 30  # Long tail, likely low competition
    return 50

def extract_intent(keyword):
    """
    Identifies the likely search intent by looking for specific trigger words.
    """
    keyword = keyword.lower()
    if any(word in keyword for word in ['buy', 'price', 'shop', 'order']):
        return "Transactional"
    if any(word in keyword for word in ['best', 'review', 'top', 'compare']):
        return "Commercial"
    if any(word in keyword for word in ['how', 'what', 'why', 'guide']):
        return "Informational"
    return "Navigational/Unknown"

def find_long_tail_variations(keyword):
    """
    Generates common long-tail variations for a given seed keyword.
    """
    suffixes = ["for beginners", "best practices", "tutorial", "near me", "2026"]
    return [f"{keyword} {suffix}" for suffix in suffixes]

def main():
    if len(sys.argv) < 2:
        print("Usage: python score_keywords.py <keyword>")
        return

    keyword = sys.argv[1]
    difficulty = calculate_difficulty(keyword)
    intent = extract_intent(keyword)
    variations = find_long_tail_variations(keyword)

    print(f"Keyword: {keyword}")
    print(f"Difficulty Score: {difficulty}/100")
    print(f"Detected Intent: {intent}")
    print("Long-tail Variations:")
    for v in variations:
        print(f"- {v}")

if __name__ == "__main__":
    main()
