import React from "react";
import { storiesOf } from "@storybook/react";
import { withState } from "@dump247/storybook-state";
import { action } from "@storybook/addon-actions";
import { LanguageSwitch, LanguageIf, LanguageProvider } from "../src/index.js";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { solarizedDark } from "react-syntax-highlighter/styles/prism";

storiesOf("LanguageSwitch", module)
  .add(
    "with text",
    withState({ language: "english" }, store => (
      <div>
        <LanguageProvider currentLanguage={store.state.language}>
          <div>
            <LanguageSwitch english="hello!" italian="ciao!" />
            <br />

            <button
              onClick={() =>
                store.set({
                  language:
                    store.state.language === "italian" ? "english" : "italian"
                })
              }
            >
              switch to{" "}
              {store.state.language === "italian" ? "english" : "italian"}
            </button>
          </div>
        </LanguageProvider>
        <SyntaxHighlighter
          language="jsx"
          style={solarizedDark}
        >{`<LanguageProvider currentLanguage={this.state.language}>
  <div>
    <LanguageSwitch english="hello!" italian="ciao!" />
    <br />

    <button
      onClick={() =>
        this.setState(({language})=>({
          language: language === "italian" ? "english" : "italian"
        }))
      }
    >
      switch to {this.state.language === "italian" ? "english" : "italian"}
    </button>
  </div>
</LanguageProvider>`}</SyntaxHighlighter>
      </div>
    ))
  )
  .add(
    "with react component",
    withState({ language: "english" }, store => (
      <div>
        <LanguageProvider currentLanguage={store.state.language}>
          <div>
            <LanguageSwitch english={<b>hello!</b>} italian={<i>ciao!</i>} />
            <br />

            <button
              onClick={() =>
                store.set({
                  language:
                    store.state.language === "italian" ? "english" : "italian"
                })
              }
            >
              switch to{" "}
              {store.state.language === "italian" ? "english" : "italian"}
            </button>
          </div>
        </LanguageProvider>
        <SyntaxHighlighter
          language="jsx"
          style={solarizedDark}
        >{`<LanguageProvider currentLanguage={this.state.language}>
  <div>
    <LanguageSwitch language={<b>hello!</b>} italian={<i>ciao!</i>} />
    <br />

    <button
      onClick={() =>
        this.setState(({language})=>({
          language: language === "italian" ? "english" : "italian"
        }))
      }
    >
      switch to {this.state.language === "italian" ? "english" : "italian"}
    </button>
  </div>
</LanguageProvider>`}</SyntaxHighlighter>
      </div>
    ))
  );

storiesOf("LanguageIf", module).add(
  "with react component",
  withState({ language: "english" }, store => (
    <div>
      <LanguageProvider currentLanguage={store.state.language}>
        <div>
          <LanguageIf language="english">
            <p>Promo code for English people: LONDON</p>
          </LanguageIf>
          <br />

          <button
            onClick={() =>
              store.set({
                language:
                  store.state.language === "italian" ? "english" : "italian"
              })
            }
          >
            switch to{" "}
            {store.state.language === "italian" ? "english" : "italian"}
          </button>
        </div>
      </LanguageProvider>
      <SyntaxHighlighter
        language="jsx"
        style={solarizedDark}
      >{`<LanguageProvider currentLanguage={this.state.language}>
  <div>

    <LanguageIf language="english" >
      <p>Promo code for English people: LONDON</p>
    </LanguageIf>
    <br />

    <button
      onClick={() =>
        this.setState(({language})=>({
          language: language === "italian" ? "english" : "italian"
        }))
      }
    >
      switch to {this.state.language === "italian" ? "english" : "italian"}
    </button>
  </div>
</LanguageProvider>`}</SyntaxHighlighter>
    </div>
  ))
);
