import React from 'react'
import { Container, Box, Text, Heading, Divider, Link } from '@chakra-ui/react'
import Section from "../components/section"
import Layout from "../components/layouts/article"
import { SkillSection, BioSection, BioYear, ItemedList } from '../components/layouts/bio'
import { GridItem } from "../components/grid-item"
import Paragraph from '../components/paragraph'

const Skills = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Skills
                </Heading>
                <Section delay={0.2}>
                    <Heading as="h2" variant="section-title">Languages</Heading>
                    <Divider />
                    <SkillSection my={6}>
                        <BioYear>
                            <ItemedList>
                                <a href="https://www.c.com/" target="blank"><img align="center" src="https://img.shields.io/badge/C-5C5C5E?style=for-the-badge&logo=c" alt="C" /></a>
                            </ItemedList>
                            <ItemedList>
                                <a href="https://www.cplusplus.com/" target="blank"><img align="center" src="https://img.shields.io/badge/c++-5C5C5E.svg?style=for-the-badge&logo=c%2B%2B&logoColor=lightblue" alt="C++" /></a>
                            </ItemedList>
                            <ItemedList>
                                <a href="https://www.python.org/" target="blank"><img align="center" src="https://img.shields.io/badge/Python-5C5C5E?style=for-the-badge&logo=python&logoColor=green" alt="Python" /></a>
                            </ItemedList>
                            <ItemedList>
                                <a href="https://www.java.com/" target="blank"><img align="center" src="https://img.shields.io/badge/Java-5C5C5E?style=for-the-badge&logo=java" alt="Java" /></a>
                            </ItemedList>
                            <ItemedList>
                                <a href="https://reactjs.org/" target="blank"><img align="center" src="https://img.shields.io/badge/React-5C5C5E?style=for-the-badge&logo=react" alt="reactJS" /></a>
                            </ItemedList>
                            <ItemedList>
                                <a href="https://html.com" target="blank"><img align="center" src="https://img.shields.io/badge/HTML5-5C5C5E?style=for-the-badge&logo=html5" alt="HTML5" /></a>
                            </ItemedList>
                            <ItemedList>
                                <a href="https://www.css.com/" target="blank"><img align="center" src="https://img.shields.io/badge/CSS3-5C5C5E?style=for-the-badge&logo=css3&logoColor=blue" alt="CSS3" /></a>
                            </ItemedList>
                            <ItemedList>
                                <a href="https://www.javascript.com/" target="blank"><img align="center" src="https://img.shields.io/badge/JavaScript-5C5C5E?style=for-the-badge&logo=javascript" alt="JavaScript" /></a>
                            </ItemedList>
                        </BioYear>
                    </SkillSection>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h2" variant="section-title">ML/DL</Heading>
                    <Divider />
                    <SkillSection my={6}>
                        <BioYear>
                            <ItemedList>
                                <a href="https://www.tensorflow.org/" target="blank"><img align="center" src="https://img.shields.io/badge/TensorFlow-5C5C5E.svg?style=for-the-badge&logo=TensorFlow" alt="Tensforflow" /></a>
                            </ItemedList>

                            <ItemedList>
                                <a href="https://numpy.org/" target="blank"><img align="center" src="https://img.shields.io/badge/numpy-5C5C5E.svg?style=for-the-badge&logo=numpy&logoColor=lightblue" alt="Numpy" /></a>
                            </ItemedList>

                            <ItemedList>
                                <a href="https://pandas.pydata.org/" target="blank"><img align="center" src="https://img.shields.io/badge/pandas-5C5C5E.svg?style=for-the-badge&logo=pandas&logoColor=green" alt="Pandas" /></a>
                            </ItemedList>

                            <ItemedList>
                                <a href="https://opencv.org/" target="blank"><img align="center" src="https://img.shields.io/badge/opencv-5C5C5E.svg?style=for-the-badge&logo=opencv&logoColor=2c2c2c" alt="CV2" /></a>
                            </ItemedList>
                        </BioYear>
                    </SkillSection>
                </Section>

                <Section delay={0.4}>
                    <Heading as="h2" variant="section-title">Blockchain</Heading>
                    <Divider />
                    <BioSection my={6}>
                        <BioYear>
                            <ItemedList>
                                <a href="https://soliditylang.org/" target="blank"><img align="center" src="https://img.shields.io/badge/Solidity-5C5C5E?style=for-the-badge&logo=solidity&logoColor=161616" alt="Solidity" /></a>
                            </ItemedList>
                        </BioYear>
                    </BioSection>
                </Section>

                <Section delay={0.5}>
                    <Heading as="h2" variant="section-title">Tools</Heading>
                    <Divider />
                    <SkillSection my={6}>
                        <BioYear>
                            <ItemedList>
                                <a href="https://www.mysql.com/" target="blank"><img align="center" src="https://img.shields.io/badge/MySQL-5C5C5E?style=for-the-badge&logo=mysql" alt="MySQL" /></a>
                            </ItemedList>

                            <ItemedList>
                                <a href="https://www.sqlite.org/index.html" target="blank"><img align="center" src="https://img.shields.io/badge/SQLite-5C5C5E?style=for-the-badge&logo=sqlite&logoColor=969CBA" alt="SQLite" /></a>
                            </ItemedList>

                            <ItemedList>
                                <a href="" target="blank"><img align="center" src="https://img.shields.io/badge/Markdown-5C5C5E?style=for-the-badge&logo=markdown" alt="markdown" /></a>
                            </ItemedList>

                            <ItemedList>
                                <a href="https://www.github.com/" target="blank"><img align="center" src="https://img.shields.io/badge/GitHub-5C5C5E?style=for-the-badge&logo=github&logoColor=2c2c2c" alt="GitHub" /></a>
                            </ItemedList>

                            <ItemedList>
                                <a href="https://www.heroku.com/" target="blank"><img align="center" src="https://img.shields.io/badge/Heroku-5C5C5E?style=for-the-badge&logo=heroku&logoColor=CC8899" alt="Heroku" /></a>
                            </ItemedList>

                            <ItemedList>
                                <a href="https://www.bootstrapcdn.com/" target="blank"><img align="center" src="https://img.shields.io/badge/Bootstrap-5C5C5E?style=for-the-badge&logo=bootstrap" alt="Bootstrap" /></a>
                            </ItemedList>

                            <ItemedList>
                                <a href="https://material-ui.com" target="blank"><img align="center" src="https://img.shields.io/badge/Material--UI-5C5C5E?style=for-the-badge&logo=material-ui" alt="material-ui" /></a>
                            </ItemedList>

                            <ItemedList>
                                <a href="https://git-scm.com" target="blank"><img align="center" src="https://img.shields.io/badge/Git-5C5C5E?style=for-the-badge&logo=git" alt="git" /></a>
                            </ItemedList>
                        </BioYear>
                    </SkillSection>
                </Section>

                <Section delay={0.6}>
                    <Heading as="h2" variant="section-title">Design</Heading>
                    <Divider />
                    <SkillSection my={6}>
                        <BioYear>
                            <ItemedList>
                                <a href="https://www.adobe.com/in/products/illustrator.html" target="blank"><img align="center" src="https://img.shields.io/badge/adobeillustrator-5C5C5E.svg?style=for-the-badge&logo=adobeillustrator" alt="Adobe Illustrator" /></a>
                            </ItemedList>

                            <ItemedList>
                                <a href="https://www.adobe.com/products/xd.html" target="blank"><img align="center" src="https://img.shields.io/badge/Adobe%20XD-5C5C5E?style=for-the-badge&logo=Adobe%20XD" alt="Adobe XD" /></a>
                            </ItemedList>

                            <ItemedList>
                                <a href="https://www.figma.com/" target="blank"><img align="center" src="https://img.shields.io/badge/figma-5C5C5E.svg?style=for-the-badge&logo=figma" alt="Figma" /></a>
                            </ItemedList>

                            <ItemedList>
                                <a href="https://www.adobe.com/products/photoshop.html" target="blank"><img align="center" src="https://img.shields.io/badge/adobephotoshop-5C5C5E.svg?style=for-the-badge&logo=adobephotoshop" alt="Adobe Photoshop" /></a>
                            </ItemedList>

                        </BioYear>
                    </SkillSection>
                </Section>
            </Container>
        </Layout >
    )
}

export default Skills