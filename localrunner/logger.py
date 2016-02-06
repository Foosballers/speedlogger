import requests
import json


def logrun(ping, up, down, unitstring, unitmultiplier):
    print("up: ", up / 1000 / 1000 * unitmultiplier)
    upspeed = up / 1000 / 1000 * unitmultiplier
    downspeed = down / 1000 / 1000 * unitmultiplier
    requests.post("http://localhost:3000/api/logs", data={"upspeed": upspeed, "downspeed": downspeed,
                                                          "unit":unitstring, "ping": json.dumps(ping)})
