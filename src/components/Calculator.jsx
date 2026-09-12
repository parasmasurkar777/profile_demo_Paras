import React, { useState } from 'react'

export default function Calculator() {
    let [val, setVal] = useState("");
    let getvalue = (x) => {
        setVal(val + x)
    }
    let reset = () => {
        setVal("");
    }
    let result = () => {
        setVal(eval(val));
    }
    return (
        <div>
            <form>
                <table border="1">
                    <tr>
                        <td colspan="4"><input type="text" value={val}></input></td>
                    </tr>
                    <tr>
                        <td><input type="button" value="1" onClick={(e) => { getvalue(e.target.value) }}></input></td>
                        <td><input type="button" value="2" onClick={(e) => { getvalue(e.target.value) }}></input></td>
                        <td><input type="button" value="3" onClick={(e) => { getvalue(e.target.value) }}></input></td>
                        <td><input type="button" value="+" onClick={(e) => { getvalue(e.target.value) }}></input></td>
                    </tr>
                    <tr>
                        <td><input type="button" value="4" onClick={(e) => { getvalue(e.target.value) }}></input></td>
                        <td><input type="button" value="5" onClick={(e) => { getvalue(e.target.value) }}></input></td>
                        <td><input type="button" value="6" onClick={(e) => { getvalue(e.target.value) }}></input></td>
                        <td><input type="button" value="-" onClick={(e) => { getvalue(e.target.value) }}></input></td>
                    </tr>
                    <tr>
                        <td><input type="button" value="7" onClick={(e) => { getvalue(e.target.value) }}></input></td>
                        <td><input type="button" value="8" onClick={(e) => { getvalue(e.target.value) }}></input></td>
                        <td><input type="button" value="9" onClick={(e) => { getvalue(e.target.value) }}></input></td>
                        <td><input type="button" value="*" onClick={(e) => { getvalue(e.target.value) }}></input></td>
                    </tr>
                    <tr>
                        <td><input type="button" value="0" onClick={(e) => { getvalue(e.target.value) }}></input></td>
                        <td><input type="button" value="/" onClick={(e) => { getvalue(e.target.value) }}></input></td>
                        <td><input type="button" value="c" onClick={reset}></input></td>
                        <td><input type="button" value="=" onClick={result}></input></td>
                    </tr>
                </table>

            </form>
        </div>
    )
}
