import requests
import json

def api_url(rows: int = 405, start: int = 0) -> str:
    return f'https://ckan0.cf.opendata.inter.prod-toronto.ca/api/3/action/search_packages?rows={rows}&sort=last_refreshed+desc&start={start}'

def data(api_url: str) -> dict:
    r = requests.get(api_url)
    l = r.json()
    _, _, res = l.items()
    _, res = res
    return res['results']

def main():
    dat = data(api_url())
    print(json.dumps(dat, indent=2))

if __name__=="__main__":
    main()
