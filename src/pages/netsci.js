import React from 'react';
import sen from "../res/img/sen.png";
import seq from "../res/img/seq.png";
import sen_d from "../res/img/sen-deg.png";
import seq_d from "../res/img/seq-deg.png";
import M1 from "../res/img/M/M1.png";
import M2 from "../res/img/M/M2.png";
import M3 from "../res/img/M/M3.png";
import M4 from "../res/img/M/M4.png";
import M5 from "../res/img/M/M5.png";
import M6 from "../res/img/M/M6.png";
import "../css/NetSci.css";
const SideNav = () => {
    return (
        <>
            <ul className="side-nav">
                <li><a href="#title">Top</a></li>
                <li><a href="#bg">Background</a></li>
                <li><a href="#procedure">Procedure</a></li>
                <li><a href="#analysis">Analysis</a></li>
                <li className="tabbed"><a href="#hub">Hubs</a></li>
                <li className="tabbed"><a href="#mod">Modularity classes</a></li>
                <li><a href="#fut">Future work</a></li>
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
                    Use networks to analyze the Chinese language
                </h1>
                <hr/>
                <h2>
                    Yufan Ma 
                </h2>
                
                <p>
                It’s fascinating how humans understand languages. We have a strict set of rules as to how letters should be arranged, but we rarely follow them exactly in real life. 
                </p>

                <p>
                Here, I will try to explain some characteristics of the Chinese language by modeling it using networks. 
                </p>

                <p>
                The goal is to generate networks that will give us insights into the underlying structures of the language and how people understand sentences in context. Network properties like Hub Scores and Modularity Classes are examined. 
                </p>

                <p>
                Due to the relatively small size of the project and difficulties gathering larger sets of data, I choose to focus on a specific piece of text: 
                <a className="out-link" href="https://www.fmprc.gov.cn/web/fyrbt_673021/" target="_blank" rel="noopener noreferrer">
                the scripts from the Chinese Department of Foreign Affairs spokesperson, Oct. 16th to 19th.                         
                </a>
                </p>

                <p>
                I am only using this piece of text because of its formal tone, which helps greatly when analyzing a loosely structured language like Chinese. The political contents and implications of the text are not the topic of interest here. 
                </p>
                <hr/>
                <h3 id="bg">
                    Background
                </h3>

                <p>
                This project aims to generate networks that carry some insights into how humans understand languages. As many researchers have pointed out, when reading a piece of text, humans usually do not treat it as a sequence of letters/characters. Instead, there is always some higher-level understanding process going on, which helps us skim through the sentences. One interesting phenomenon that results from this process is called typoglycemia.
                </p>

                <p>
                Typoglycemia is a portmanteau of "typo" and "hypoglycemia", which refers to the phenomenon when people can understand a sentence even if the letters are scrambled. Here is an example in English, which is an internet meme circulating around 2003:
                </p>

                <p className="quote">
                    Aoccrding to a rsceearch at Cmabrigde Uinervtisy, it deosn’t mttaer in waht oredr the ltteers in a wrod are, the olny iprmoetnt tihng is taht the frist and lsat ltteer be at the rghit pclae.
                </p>

                <p>
                What happened is more complicated than the meme. We do not read the text as sequences of letters, but neither do we see them as simply unordered sets of characters. The reality lies somewhere in between. To better understand it, I constructed two networks to analyze both approaches. 
                </p>

                <p>
                The networks that I created show great potential in exposing language properties as network measures, which will allow us to train machine learning models to interpret typoglycemia sentences using the knowledge we gained here, which can be of great importance to natural language processing. 
                </p>

                <hr/>

                <h3 id="procedure">
                    Procedure
                </h3>

                <p>
                The Chinese language has a character system that is vastly different from English or any Indo-European language. In English, every word is made up of letters chosen from a very small set(26). But in Chinese, there are tens of thousands of commonly used characters, and the words are formed by combining one or more of the characters.
                </p>

                <p>
                The two networks are both built out of the 4 scripts I gathered, utilizing the Python library Networkx. For both networks, the characters are represented as vertices. 
                </p>

                <p>
                In the first network, the scripts are split into sentences, and each sentence is then treated as a sequence of characters. The next step is to traverse through the sequence and add directed edges to the network that connect adjacent vertices according to their orders in the sentences. Multiple instances of the same edge are counted via weighting the edges. This simulates reading through the sentences letter-by-letter. The resulting network has 1146 vertices and 5512 edges. 
                </p>

                <p>
                In the second one, instead of only connecting adjacent characters, all characters in the same sentence are connected. This simulates reading the sentence as a whole, which of course leads to a much larger network with 49223 edges. 
                </p>

                <p>
                After the networks are created, they are imported to Gephi for more detailed analysis and network measures calculations.
                </p>
                <p>
                Here are the two networks in Gephi:
                </p>

                <ul className="graphs-wrapper">
                    <li><img src={sen} alt="Sentence network graph"/></li>
                    <li><img src={seq} alt="Sequential network graph"/></li>
                </ul>
                
                <hr/>
                <h3 id="analysis">
                    Analysis
                </h3>

                <ul className="graphs-wrapper">
                    <li><img src={sen_d} alt="Sentence network degree distribution"/></li>
                    <li><img src={seq_d} alt="Sequential network degree distribution"/></li>
                </ul>

                <p>
                Their degree distributions, as we can see here, fit power-law pretty well, especially for the sequential network. Even though the total number of degrees is much smaller compared with the sentence network, the sequential network fits Power Law even better. This can be seen as a result of how they are built: the sentence network is essentially a combination of different complete graphs, and its size and completeness very much depend on how we split the text into sentences, which is rather difficult to do, consider the existence of commas and the fact that the text I chose was speaking scripts, not written statements. The sequential network, on the other hand, is built intuitively. Nevertheless, the fact that the sequential network fits Power Law so well, even with this rather small sample size(~1000 vertices) is convincing evidence that our approach has its significance: the language does have a remarkable level of “networkness” to it.
                </p>

                <h4 id="hub">
                    Hubs in the sequential network
                </h4>

                <p>
                Now that the sample networks are constructed, we can start looking at the network measures and what they reflect. Let’s take a look at the hub nodes in the sequential network. Some of the biggest hubs are the most commonly used grammatical particles. After all, their job is to connect other characters, so it should not come as a surprise that they have high hub scores. These particles also have a relatively big influence on how well people can understand a scrambled sentence since if we shuffle their orders a lot, the sentence becomes way harder to understand.
                </p>

                <p>
                These hubs largely overlap with the vertices with the highest PageRank and degree centralities, with one notable exception, the character 中, which has 3rd highest weighted degree/PageRank centrality but is rather low on the hub score. The character means “China/Chinese/The Chinese government”. It is often used to begin a sentence in the script rather than in the middle, and the characters that can appear around it are rather limited, contributing to its low hub score.
                </p>

                <p>
                Note that I refrained from using measures like closeness centrality or betweenness centrality because, in this sequential network, they don’t carry the meanings we would expect: two sentences could be “connected” in the graph by having the same character at the end of one sentence and the beginning of the other, forming a long path in the network but the long sentence itself can have no meaning whatsoever. Randomly walking in the network rarely gives us meaningful sentences, therefore the centrality measures that rely on these “random walks”, like betweenness centrality, don't help with our analysis. This shows that the language is more than just these two networks(of course), but since this was never supposed to be an accurate representation of natural language processing but rather a gross approximation, I will stick with the networks for now.
                </p>

                <h4 id="mod">
                Modularity classes in sentence network
                </h4>

                <p>
                Now let’s take a look at the sentence network. Like I mentioned before, the sentence network treats the sentences as sets of characters, completely ignoring the internal ordering of sentences. Therefore, it is intuitive to look at the modularity classes, which are also “sets of vertices''. If some characters often appear in the same sentence, readers may unconsciously connect them in some way. This connection can carry significant importance in the Chinese context since often characters have inherent “meanings'' to them. By splitting the network into modularity classes, I intend to confirm that these connections actually exist, and the characters that appear in the same modularity class are indeed related to each other in some way.
                </p>

                <p>I was able to get 6 modularity classes out of the network using a resolution of 1.05. Here are the modularity classes.</p>

                <ul className="graphs-wrapper">
                    <li><img src={M1} alt="Sentence network modularity class 1"/></li>
                    <li><img src={M2} alt="Sentence network modularity class 2"/></li>
                    <li><img src={M3} alt="Sentence network modularity class 3"/></li>
                    <li><img src={M4} alt="Sentence network modularity class 4"/></li>
                    <li><img src={M5} alt="Sentence network modularity class 5"/></li>
                    <li><img src={M6} alt="Sentence network modularity class 6"/></li>
                </ul>

                <p>
                To someone who does not know the languages, they just look like a bunch of random graphs. However, to a fluent Chinese speaker, the characters in each graph are talking about very different things, and they even carry vastly different emotions. When scrambling a sentence, if its characters are in a closer community, then intuitively the scrambled version is easier to understand compared with some set of characters with less clear communities. Of course, other factors like the surrounding context of the sentence also play a big role, but I’m ignoring them for now.
                </p>

                <p>
                Let’s examine the modularity classes closely. In Class 1, the characters form words that include 进步(progress), 愿景(vision), 促进 / 提倡(promote, advocate), 合作(collaboration), 积极(positive) There are also country names like Pakistan, which is often referred as “Chinese people’s best brother”.
                </p>

                <p>
                On the other hand, in Class 5, there are words like 把戏(tricks), 挑衅(provocative), 冲突(conflict), 胡说八道(nonsense), 抹黑(smear). And there is one country name in the class, you guessed it, 美国(the U.S.), which is currently having a tense relationship with China.
                </p>

                <p>
                Moreover, in Class 5, I found words like Fukushima, Nuclear waste, Deforestation, Chemicals, WHO, and Viruses. Because a huge part of the international conversations these days are about the environment and public health, it is fascinating that all the words related can be found in one single rather small community.
                </p>

                <p>
                By looking at the modularity classes, I believe that these sets of characters play a big role in how people understand a sentence. They help set a tone before the reader traverses through the sentence character by character, and guide the reader towards a certain direction. To some degree, people are reading the characters as sets, rather than arrays.
                </p>

                <hr/>

                <h3 id="fut">
                    Future work & more
                </h3>

                <p>This is, like I said, just the first step. Of course, both networks have their flaws and inherent weaknesses, which is why I chose to construct both of them. I believe that a fairly accurate approximation of how the Chinese language is understood can be obtained from combining the two models in some way, but that is going far beyond the scope of network science into machine learning and AI.</p>

                <p>Looking at the model I have right now, I see many flaws. The dataset is smaller than I would like, but there are no existing ones, and I had to hand parse them, given the complex grammatical structure of the language. The next step is creating a crawler and parser to get a much larger set of sentences, at least 10k. I also would like to include more contexts, and compare the structures in different contexts to generalize them. This requires a more detailed and comprehensive analysis since casual conversations are much harder to make sense of. </p>
                
                <p>
                The readability of a sentence is also a very subjective matter: one may find a sentence to be completely unrecognizable, while someone else, with their different set of knowledge/experiences, may immediately make out the original sentence.
                </p>
                <p>
                When I have ways to address these issues, I will try to create and train a machine learning model to predict how readable a scrambled text is, and guess the possible original text. Hopefully this will happen sometime soon.</p>
                <p>
                    A special thanks goes to Professor Andrew Beveridge for his guidance and support, especially during this difficult time. 
                </p>
                
            </div>
            </>
    );
}


export default NetSci;