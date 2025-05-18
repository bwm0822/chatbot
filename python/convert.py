import pandas as pd
import json



def excel_to_json(input_file, output_file):
    # 讀取整份 Excel
    xls = pd.ExcelFile(input_file)
    combined = []

    for sheet_name in xls.sheet_names:
        df = xls.parse(sheet_name)
        records = df.to_dict(orient="records")  # 每列變一筆字典
        # combined[sheet_name] = records          # 用 sheet 名當 key
        combined.append({'title':sheet_name, 'content':records})

    # 儲存成一個 JSON 檔案
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(combined, f, ensure_ascii=False, indent=2)

    print(f"🥵 所有 sheets 都轉好了！JSON 儲存在：{output_file}")




def unit_test():
    # 設定檔案路徑
    input_excel_path = "./python/words.xlsx"               # 你的 Excel 
    output_json_path = "./frontend/words.json"     # 輸出的 JSON 檔案名稱

    excel_to_json(input_excel_path, output_json_path)       


if __name__ == "__main__":
    unit_test()