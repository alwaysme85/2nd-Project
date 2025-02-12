/* import React from "react";
import "./Playlist.css";

function Playlist() {
  return (
    <>
      <div className="playback"></div>
    </>
  );
}

export default Playlist; */

import React, { useContext } from "react";
import "./Playlist.css";
/* import PlaylistContext from "../user/PlaylistContext"; */
import CartContext from "../user/CartContext";
import yhead from "../assets/yHeadphones.jpg";
import { IoPlay } from "react-icons/io5";

function Playlist() {
  const { playlistItems, setPlaylistItems } = useContext(CartContext);
  const handleRemoveItemFromPlaylist = (id) => {
    const updatedPlaylist = playlistItems.filter((item) => item.id !== id);
    setPlaylistItems(updatedPlaylist);
  };
  return (
    <>
      <div className="playback">
        {/*  <h2>Playlist</h2> */}
        <ul className="playlist">
          {playlistItems.length === 0 ? (
            <p>No items in playlist</p>
          ) : (
            playlistItems.map((product) => (
              <li key={product.id} className="playlist-item">
                <img
                  src={product.image}
                  className="playlist-image"
                  alt={product.name}
                />
                <div className="playlist-info">
                  <h3>
                    {product.name} - {product.title}
                  </h3>

                  <p>Album: {product.album || "Unknown Album"}</p>
                  <div>
                    <img src={yhead} alt="" className="yhead" />
                    <button className="play-btn">
                      <IoPlay className="play-icon" />
                    </button>
                    <button
                      className="remove-btn"
                      onClick={() => handleRemoveItemFromPlaylist(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
}

export default Playlist;
