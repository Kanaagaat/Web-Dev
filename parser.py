import requests

url = "https://kaspi.kz/yml/main-navigation/n/n/desktop-topbar"

params = {
    "depth": 3,
    "city": "750000000",
    "rootType": "desktop"
}

headers = {
    "Accept": "application/json",
    "User-Agent": "Mozilla/5.0",
    "Referer": "https://kaspi.kz/"
}

r = requests.get(url, params=params, headers=headers)

print(r.status_code)
print(r.json())
