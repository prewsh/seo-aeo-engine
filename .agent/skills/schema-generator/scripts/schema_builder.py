import json
import os

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))

def load_template(template_name):
    """
    Loads a JSON-LD template from the references directory.
    """
    path = os.path.join(SCRIPT_DIR, "..", "references", f"{template_name}.json")
    if os.path.exists(path):
        with open(path, 'r') as f:
            return json.load(f)
    return None

def populate_template(template, data):
    """
    Deep merges page-specific data into the JSON-LD template.
    """
    # Simple recursive update simulation
    for key, value in data.items():
        if key in template:
            template[key] = value
    return template

def main():
    # Example usage for FAQ
    template = load_template("faq")
    if template:
        data = {"name": "Updated FAQ Title"}
        populated = populate_template(template, data)
        print(json.dumps(populated, indent=2))
    else:
        print("Template not found.")

if __name__ == "__main__":
    # Note: When running from scripts/, references is at ../references/
    # This script assumes Cwd is the scripts directory.
    main()
