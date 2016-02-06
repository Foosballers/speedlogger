import requests
import json


def log_run(isp, ping, up, down):
    upspeed = up / 1000 / 1000  * 8
    downspeed = down / 1000 / 1000 * 8
    results = merge_dicts({"test-host": ping}, {"isp": isp, "up-speed": upspeed, "down-speed": downspeed})
    with_config = merge_dicts(results, load_config())
    requests.post("http://localhost:3000/api/logs",json=with_config)


def load_config():
    with open('config.json') as config_data:
        data = json.load(config_data)
    return data


def merge_dicts(x, y):
    ret = x.copy()
    ret.update(y)
    return ret


def main():
    try:
        print(json.dumps(load_config()))
    except KeyboardInterrupt:
        print('\nCancelling...')


if __name__ == '__main__':
    main()


