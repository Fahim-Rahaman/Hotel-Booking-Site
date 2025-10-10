import React from "react";
import "./propertyList.css";

const propertyList = () => {
    return (
        <div className="propertyList">
            <div className="propertyListItem">
                <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" alt="Apartments" className="propertyListImg" />
                <div className="propertyListTitles">
                    <h1>Hotels</h1>
                    <h2>123 hotels</h2>
                </div>
            </div>
            <div className="propertyListItem">
                <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80" alt="Apartments" className="propertyListImg" />
                <div className="propertyListTitles">
                    <h1>Appartment</h1>
                    <h2>123 hotels</h2>
                </div>
            </div>
            <div className="propertyListItem">
                <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Resorts" className="propertyListImg" />
                <div className="propertyListTitles">
                    <h1>Resorts</h1>
                    <h2>123 hotels</h2>
                </div>
            </div>
            <div className="propertyListItem">
                <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80" alt="Villas" className="propertyListImg" />
                <div className="propertyListTitles">
                    <h1>Hotels</h1>
                    <h2>123 hotels</h2>
                </div>
            </div>
        </div>
    );
};

export default propertyList;
