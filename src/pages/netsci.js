import React from 'react';
import "../css/NetSci.css";
const SideNav = () => {
    return (
        <>
            <ul className="side-nav">
                <li><a href="#title">Top</a></li>
            </ul>
        </>
    )
}

const NetSci = () =>{
    return (
        <>
            <SideNav />
            <div id="wrapper">
                <h1 id="title">
                    Use networks to analyze the Chinese language - Part One
                </h1>
                <hr/>
                <h2>
                    Yufan Ma 10/21/20
                </h2>

                <h3 id="intro">
                    Introduction
                </h3>
                <p>
                    It’s fascinating how humans understand languages. 
                    We have a strict set of rules as to how letters should be arranged, 
                    but we rarely follow them exactly in real life. 
                    Since the 1960s researchers have been working on the effect of scrambling letters in a word. 
                    During the early 2000s, a famous internet meme at the time brought this topic to the eyes of the public. 
                    It starts with:
                </p>

                <p className="quote">
                    Aoccdrnig to a rscheearch at Cmabrigde Uinervtisy, 
                    it deosn’t mttaer in waht oredr the ltteers in a wrod are, 
                    the olny iprmoetnt tihng is taht the frist and lsat ltteer be at the rghit pclae.
                </p>

                <p>
                    The letters in this piece of text are scrambled around, 
                    but to a fluent English speaker, the text is still recognizable.
                </p>
                <p>
                    Of course, this is just an internet meme and there was no such research at the time at o University of Cambridge, UK. 
                    That is, before a researcher named Matt Davis noticed the piece and actually wrote a page to discuss the phenomenon, 
                    which is named Typoglycemia (a portmanteau of "typo" and "hypoglycemia").
                </p>
                <p>
                    A lot of work has been done on the topic of Typoglycemia in English. 
                    There have been many theories as to why some scrambled texts are more recognizable than others, 
                    but there is not yet a theory that can explain the phenomenon flawlessly. 
                    In fact, many researchers have argued that the explanation to this phenomenon will 
                    very likely give us critical insights to the brain process which helps humans recognize languages.
                </p>
                <p>
                    In this blog, I will explain the phenomenon in the language of network science. 
                    This explanation, of course, is still flawed in many ways, 
                    but I do believe that it will provide a quantitative approach to the field. 
                </p>
                <p>
                    Specifically, I will examine the structures in the Chinese language setting, 
                    given its even higher level of typoglycemia. 
                    Note that in this part I will not talk too much about the actual phenomenon 
                    but rather focus on the properties of the language itself 
                    -- the phenomenon will be examined at a later date through training machine learning models 
                    on the networks that we created from this part. 
                </p>
                
                <h3>
                    History
                </h3>


            </div>
            </>
    );
}


export default NetSci;