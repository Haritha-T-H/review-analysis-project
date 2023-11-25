from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import pickle
import numpy as np

# from model import nlp_model

app = Flask(__name__)
CORS(app)
df = pd.read_csv("./review.csv")

with open("model.pkl", "rb") as f:
    model = pickle.load(f)

from_disk = pickle.load(
    open(
        "tvecc.pkl",
        "rb",
    )
)


@app.route("/api/", methods=["GET"])
def respond():
    positive = 0
    negative = 0
    device = request.args.get("device", None)
    print(f"got name {device}")
    filtered_rows = df[df["name"] == device]
    result = filtered_rows["reviews.text"].tolist()
    print(len(result))

    for x in result:
        demo_review_3 = np.array([x])
        demo_review_X_test_2 = from_disk.transform(demo_review_3)
        r = model.predict(demo_review_X_test_2)
        if r == 0:
            negative += 1
        if r == 1:
            positive += 1
    print(positive)

    body = {}
    data = {}

    data["positive"] = positive
    data["negative"] = negative

    body["data"] = data
    return buildResponse(body)


@app.route("/")
def index():
    body = {}
    body["message"] = "Success"
    body["data"] = "Welcome to YTS API."

    return buildResponse(body)


def buildResponse(body):
    response = jsonify(body)
    return response


if __name__ == "__main__":
    app.run(threaded=True)
