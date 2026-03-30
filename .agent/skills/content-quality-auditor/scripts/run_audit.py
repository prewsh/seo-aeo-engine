import re

def audit_seo_signals(content):
    """
    Audits traditional SEO elements like heading structure and keyword density.
    """
    report = {"H1_count": len(re.findall(r'^# ', content, re.M)),
              "H2_count": len(re.findall(r'^## ', content, re.M)),
              "Meta_check": "Meta elements missing" if "Meta Description" not in content else "Meta elements present"}
    return report

def audit_aeo_signals(content):
    """
    Audits AEO-specific signals such as FAQ presence, concise definitions, and clear lists.
    """
    report = {"FAQ_count": len(re.findall(r'^Q: ', content, re.M)),
              "Definition_sentences": 1 if re.search(r'is a|refers to|defined as', content, re.I) else 0,
              "List_formatting": 1 if re.search(r'^\s*[-*]\s+', content, re.M) else 0}
    return report

def main():
    # Example content simulation
    content = """
    # SEO-AEO Engine Basics
    SEO-AEO Engine is an AI tool for search dominance.
    
    ## Key Features
    - Fast
    - Efficient
    
    Q: How to use?
    A: Just run the script.
    
    Meta Description: Learn how to dominate search with AI.
    """
    
    seo_report = audit_seo_signals(content)
    aeo_report = audit_aeo_signals(content)
    
    print("--- SEO Audit ---")
    for k, v in seo_report.items():
        print(f"{k}: {v}")
        
    print("\n--- AEO Audit ---")
    for k, v in aeo_report.items():
        print(f"{k}: {v}")

if __name__ == "__main__":
    main()
