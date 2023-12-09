import { useState } from "react";
import styled from "styled-components";
function App() {
  const [IncludeUpperCase, setIncludeUpperCase] = useState(true);
  const [IncludeLowerCase, setIncludeLowerCase] = useState(true);
  const [IncludeNumbers, setIncludeNumbers] = useState(true);
  const [IncludeSymbols, setIncludeSymbols] = useState(true);
  const [randomise, setRandomise] = useState("");
  const [range, setRange] = useState(0);

  const symbols = "&é'#('ç_()àç=)é%$ù^^";
  const L = "abcdefghijklmnopqrstuvwxyz";
  const U = L.toUpperCase();
  const N = "0123456789";

  const getRandomLSUN = () => {
    let newL = "";
    let newN = "";
    let newU = "";
    let newS = "";
    let res = "";

    if (IncludeLowerCase) {
      for (let i = 0; i < range; i++) {
        const randomL = L[Math.floor(Math.random() * L.length)];
        newL += randomL;
      }
    }

    if (IncludeUpperCase) {
      for (let i = 0; i < range; i++) {
        const randomU = U[Math.floor(Math.random() * U.length)];
        newU += randomU;
      }
    }

    if (IncludeNumbers) {
      for (let i = 0; i < range; i++) {
        const randomN = N[Math.floor(Math.random() * N.length)];
        newN += randomN;
      }
    }

    if (IncludeSymbols) {
      for (let i = 0; i < range; i++) {
        const randomS = symbols[Math.floor(Math.random() * symbols.length)];
        newS += randomS;
      }
    }

    res = newL + newN + newS + newU;

    let fRes = "";

    for (let i = 0; i < range; i++) {
      fRes += res[Math.floor(Math.random() * res.length)];
    }

    setRandomise(fRes);
  };

  return (
    <>
      <Container>
        <div className="E">
          <p>Password generator</p>
          <div className="Randomisedstring">
            <button>{randomise}</button>
          </div>
          <div className="Atribs">
            <div className="Range">
              <p>Character Length </p>
              <p className="topnum">{range}</p>
            </div>
            <input
              type="range"
              onChange={(e) => setRange(Number(e.target.value))}
              min={0}
              max={50}
              value={range}
              className="R"
            />
            <label>
              <input
                type="checkbox"
                checked={IncludeUpperCase}
                onChange={() => setIncludeUpperCase(!IncludeUpperCase)}
              />
              Include Uppercase
            </label>

            <label>
              <input
                type="checkbox"
                checked={IncludeLowerCase}
                onChange={() => setIncludeLowerCase(!IncludeLowerCase)}
              />
              Include Lowercase
            </label>

            <label>
              <input
                type="checkbox"
                checked={IncludeNumbers}
                onChange={() => setIncludeNumbers(!IncludeNumbers)}
              />
              Include Numbers
            </label>

            <label>
              <input
                type="checkbox"
                checked={IncludeSymbols}
                onChange={() => setIncludeSymbols(!IncludeSymbols)}
              />
              Include Symbols
            </label>
            <div className="Strength">{range}</div>
            <input
              className="Gen"
              type="button"
              onClick={getRandomLSUN}
              value="Generate"
            />
          </div>
          <div className="Lenght display"></div>
        </div>
      </Container>
    </>
  );
}

export default App;
const Container = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 94%;
  height: 86vh;
  background-color: #1f1e24;

  padding: 50px;
  border-radius: 4px;
  background-size: 100%;
  * {
    box-sizing: border-box;
  }

  .E {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    height: 60vh;
    width: 30%;
    padding: 50px;
    border-radius: 4px;
    background-size: 100%;
    background-color: #1f1e24;
    margin: 0 auto;
  }
  .Randomisedstring {
    border: none;
    background-color: #000000;
    color: #62616a;
    margin: none;
    display: block;
    margin-bottom: 50px;
    width: 100%;
    height: 20px;
  }
  p {
    color: #62616a;
  }
  .Randomisedstring button {
    text-align: center;
    border: none;
    background-color: #26242c;
    color: #62616a;
    margin: none;
    display: block;
    margin-bottom: 50px;
    padding: 10px;
    width: 100%;
  }
  .Atribs {
    display: flex;
    flex-direction: column;
    border: none;
    background-color: #26242c;
    color: #62616a;
    margin: none;
    width: 100%;
  }
  .Atribs input {
    cursor: pointer;
  }
  .Range {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: none;
    padding-left: 10px;
    padding-right: 10px;
  }
  .R {
    display: flex;
    align-self: center;
    margin: none;
    -webkit-appearance: none;
    appearance: none;
    width: 90%;
    height: 5px;
    background: #000000;
    outline: none;
    opacity: 1;
  }

  .R:hover {
    background: gray;
    transition: 0.1s;
  }
  .R::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
  }
  .R:hover::-webkit-slider-thumb {
    transition: 0.2s;
    background: #f4a4a4;
  }
  .Gen {
    border: none;
    background: #a4ffaf;
    height: 2rem;
    width: 70%;
    margin-left: 50px;
  }
  .topnum {
    color: #a5ffb3;
  }
`;
