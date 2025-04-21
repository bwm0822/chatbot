import subprocess
import time
import requests
import os
from google.cloud import firestore

# 設定你的 Firebase 金鑰路徑
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "firebase-key.json"

# 啟動 Ngrok
print("🚀 啟動 Ngrok 中...")
ngrok_process = subprocess.Popen(["ngrok", "http", "11434"])  # 這裡是你要對外開的 port
time.sleep(3)  # 稍等 Ngrok 建立連線

# 嘗試多次抓 ngrok 網址（有時一開始還沒跑起來）
ngrok_url = None
for i in range(5):
    try:
        tunnels = requests.get("http://localhost:4040/api/tunnels").json()
        ngrok_url = tunnels["tunnels"][0]["public_url"]
        break
    except:
        time.sleep(1)

if not ngrok_url:
    print("❌ 無法取得 Ngrok 網址")
    exit(1)

print(f"✅ Ngrok URL: {ngrok_url}")

# 更新到 Firebase Firestore
db = firestore.Client()
doc_ref = db.collection(u'settings').document(u'ngrok')
doc_ref.set({u'url': ngrok_url})

print("🎉 Firebase 更新完成！")

# 保持 Ngrok 執行
try:
    ngrok_process.wait()
except KeyboardInterrupt:
    print("\n🛑 手動中止 Ngrok")
    ngrok_process.terminate()
