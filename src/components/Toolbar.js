import React from "react";
import { CustomEditor } from "./index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCode,
    faLink,
    faBold,
    faItalic,
    faHeading,
    faUnderline,
    faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Toolbar({ editor }) {
    return (
        <div id="toolbar">
            <button
                onMouseDown={(e) => {
                    e.preventDefault();
                    CustomEditor.toggleBoldMark(editor);
                }}
            >
                <FontAwesomeIcon icon={faBold} />
            </button>
            <button
                onMouseDown={(e) => {
                    e.preventDefault();
                    CustomEditor.toggleItalicMark(editor);
                }}
            >
                <FontAwesomeIcon icon={faItalic} />
            </button>
            <button
                onMouseDown={(e) => {
                    e.preventDefault();
                    CustomEditor.toggleUnderlineMark(editor);
                }}
            >
                <FontAwesomeIcon icon={faUnderline} />
            </button>
            <button
                onMouseDown={(e) => {
                    e.preventDefault();
                    CustomEditor.toggleCodeBlock(editor);
                }}
            >
                <FontAwesomeIcon icon={faCode} />
            </button>
            <button
                onMouseDown={(e) => {
                    e.preventDefault();
                    CustomEditor.toggleLinkBlock(editor);
                }}
            >
                <FontAwesomeIcon icon={faLink} />
            </button>
            <button
                onMouseDown={(e) => {
                    e.preventDefault();
                    CustomEditor.toggleTitleBlock(editor);
                }}
            >
                <FontAwesomeIcon icon={faHeading} />
            </button>
            <button
                onMouseDown={(e) => {
                    e.preventDefault();
                    CustomEditor.toggleQuoteBlock(editor);
                }}
            >
                <FontAwesomeIcon icon={faQuoteRight} />
            </button>
        </div>
    );
}
