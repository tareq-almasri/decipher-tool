import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    a: "a",
    b: "b",
    c: "c",
    d: "d",
    e: "e",
    f: "f",
    g: "g",
    h: "h",
    i: "i",
    j: "j",
    k: "k",
    l: "l",
    m: "m",
    n: "n",
    o: "o",
    p: "p",
    q: "q",
    r: "r",
    s: "s",
    t: "t",
    u: "u",
    v: "v",
    w: "w",
    x: "x",
    y: "y",
    z: "z",
    a0: "0",
    a1: "1",
    a2: "2",
    a3: "3",
    a4: "4",
    a5: "5",
    a6: "6",
    a7: "7",
    a8: "8",
    a9: "9",
    inputField: "",
    encrypted: true,
    encryptedText: "",
    decryptedText: ""
  };

  handleText = e => {
    let arr = e.target.value.toLowerCase().split("");
    let numbers = "0123456789";

    let encrypted = arr
      .map(letter =>
        numbers.includes(letter)
          ? this.state["a" + letter]
          : letter === " "
          ? " "
          : this.state[letter]
      )
      .join("");

    let decrypted = arr
      .map(letter => {
        let x = Object.keys(this.state).find(key => this.state[key] === letter);

        return letter === " " ? " " : x && x.length > 1 ? x.substring(1) : x;
      })
      .join("");

    this.setState({
      inputField: e.target.value,
      encryptedText: encrypted,
      decryptedText: decrypted
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Text Encryption App</h1>
        <h3>
          *keys should have unique values or it will just be assigned to the
          first key that appears in this list on decryption*
        </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            padding: "40px",
            flexWrap: "wrap"
          }}
        >
          <div>
            <div>keys:</div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                width: "300px",
                height: "fit-content"
              }}
            >
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>A:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="name"
                  onChange={e => this.setState({ a: e.target.value })}
                  value={this.state.a}
                ></input>
              </div>
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>B:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="letter"
                  onChange={e => this.setState({ b: e.target.value })}
                  value={this.state.b}
                ></input>
              </div>
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>C:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="name"
                  onChange={e => this.setState({ c: e.target.value })}
                  value={this.state.c}
                ></input>
              </div>
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>D:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="letter"
                  onChange={e => this.setState({ d: e.target.value })}
                  value={this.state.d}
                ></input>
              </div>

              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>E:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="name"
                  onChange={e => this.setState({ e: e.target.value })}
                  value={this.state.e}
                ></input>
              </div>
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>F:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="letter"
                  onChange={e => this.setState({ f: e.target.value })}
                  value={this.state.f}
                ></input>
              </div>
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>G:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="name"
                  onChange={e => this.setState({ g: e.target.value })}
                  value={this.state.g}
                ></input>
              </div>
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>H:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="letter"
                  onChange={e => this.setState({ h: e.target.value })}
                  value={this.state.h}
                ></input>
              </div>
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>I:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="name"
                  onChange={e => this.setState({ i: e.target.value })}
                  value={this.state.i}
                ></input>
              </div>
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>J:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="letter"
                  onChange={e => this.setState({ j: e.target.value })}
                  value={this.state.j}
                ></input>
              </div>
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>K:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="name"
                  onChange={e => this.setState({ k: e.target.value })}
                  value={this.state.k}
                ></input>
              </div>
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>L:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="letter"
                  onChange={e => this.setState({ l: e.target.value })}
                  value={this.state.l}
                ></input>
              </div>

              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>M:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="name"
                  onChange={e => this.setState({ m: e.target.value })}
                  value={this.state.m}
                ></input>
              </div>
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>N:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="letter"
                  onChange={e => this.setState({ n: e.target.value })}
                  value={this.state.n}
                ></input>
              </div>
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>O:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="name"
                  onChange={e => this.setState({ o: e.target.value })}
                  value={this.state.o}
                ></input>
              </div>
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>P:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="letter"
                  onChange={e => this.setState({ p: e.target.value })}
                  value={this.state.p}
                ></input>
              </div>
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>Q:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="name"
                  onChange={e => this.setState({ q: e.target.value })}
                  value={this.state.q}
                ></input>
              </div>
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>R:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="letter"
                  onChange={e => this.setState({ r: e.target.value })}
                  value={this.state.r}
                ></input>
              </div>
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>S:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="name"
                  onChange={e => this.setState({ s: e.target.value })}
                  value={this.state.s}
                ></input>
              </div>
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>T:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="letter"
                  onChange={e => this.setState({ t: e.target.value })}
                  value={this.state.t}
                ></input>
              </div>
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>U:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="name"
                  onChange={e => this.setState({ u: e.target.value })}
                  value={this.state.u}
                ></input>
              </div>
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>V:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="letter"
                  onChange={e => this.setState({ v: e.target.value })}
                  value={this.state.v}
                ></input>
              </div>

              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>W:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="name"
                  onChange={e => this.setState({ w: e.target.value })}
                  value={this.state.w}
                ></input>
              </div>
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>X:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="letter"
                  onChange={e => this.setState({ x: e.target.value })}
                  value={this.state.x}
                ></input>
              </div>
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>Y:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="name"
                  onChange={e => this.setState({ y: e.target.value })}
                  value={this.state.y}
                ></input>
              </div>
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>Z:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="letter"
                  onChange={e => this.setState({ z: e.target.value })}
                  value={this.state.z}
                ></input>
              </div>
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>0:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="name"
                  onChange={e => this.setState({ a0: e.target.value })}
                  value={this.state.a0}
                ></input>
              </div>
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>1:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="letter"
                  onChange={e => this.setState({ a1: e.target.value })}
                  value={this.state.a1}
                ></input>
              </div>
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>2:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="name"
                  onChange={e => this.setState({ a2: e.target.value })}
                  value={this.state.a2}
                ></input>
              </div>
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>3:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="letter"
                  onChange={e => this.setState({ a3: e.target.value })}
                  value={this.state.a3}
                ></input>
              </div>
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>4:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="name"
                  onChange={e => this.setState({ a4: e.target.value })}
                  value={this.state.a4}
                ></input>
              </div>
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>5:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="letter"
                  onChange={e => this.setState({ a5: e.target.value })}
                  value={this.state.a5}
                ></input>
              </div>

              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>6:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="name"
                  onChange={e => this.setState({ a6: e.target.value })}
                  value={this.state.a6}
                ></input>
              </div>
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>7:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="letter"
                  onChange={e => this.setState({ a7: e.target.value })}
                  value={this.state.a7}
                ></input>
              </div>
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>8:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="name"
                  onChange={e => this.setState({ a8: e.target.value })}
                  value={this.state.a8}
                ></input>
              </div>
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  width: "50px",
                  justifyContent: "space-between"
                }}
              >
                <label>9:</label>
                <input
                  style={{ width: "20px", textAlign: "center" }}
                  type="letter"
                  onChange={e => this.setState({ a9: e.target.value })}
                  value={this.state.a9}
                ></input>
              </div>
            </div>
          </div>
          <div>
            <div>input text:</div>
            <textarea
              type="text"
              onChange={this.handleText}
              value={this.state.inputField}
              placeholder="text to encrypt or encrypted text to decrypt"
              rows="25"
              style={{ width: "300px", padding: "10px" }}
            ></textarea>
          </div>
          <div>
            <div>
              <span style={{ paddingRight: "10px" }}>output:</span>

              <input
                type="checkBox"
                name="outputType"
                checked={this.state.encrypted}
                onChange={() =>
                  this.setState(prev => (prev.encrypted = !prev.encrypted))
                }
              ></input>
              <label style={{ paddingRight: "15px" }}>encrypt</label>
              <input
                type="checkBox"
                name="outputType"
                checked={!this.state.encrypted}
                onChange={() =>
                  this.setState(prev => (prev.encrypted = !prev.encrypted))
                }
              ></input>
              <label>decrypt</label>
            </div>
            <textarea
              type="text"
              disabled={true}
              value={
                this.state.encrypted
                  ? this.state.encryptedText
                  : this.state.decryptedText
              }
              placeholder="output"
              rows="25"
              style={{ width: "300px", padding: "10px" }}
            ></textarea>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
