import React from 'react';
import './r.css';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";


function New() {
    return (
        <>
        <div className="newpost page">
        <h1>NEW POST HERE</h1>
            <div class="input-group">
                <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                <button class="btn btn-danger" type="button" id="inputGroupFileAddon04">Upload</button>
            </div>
            </div>
        </>
    )
}

export default New;
