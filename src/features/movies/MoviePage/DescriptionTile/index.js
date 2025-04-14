import { Description, DescriptionPoster, DescriptionSection, Paragraph, Rating, Tags, Title, Year, ProductionInfo } from "./styled";

export const DescriptionTile = () => (
    <DescriptionSection>
        <DescriptionPoster
            src={`${process.env.PUBLIC_URL}/PosterSmall.png`} alt="Poster"
        />
        <Description>
            <Title> Mulan</Title>
            <Year>2020</Year>
            <ProductionInfo>Production: China, United States of America</ProductionInfo>
            <ProductionInfo>Release date: 24.10.2020</ProductionInfo>
            <Tags>Action, Adventure, Drama</Tags>
            <Rating>Rating</Rating>
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph>
        </Description>
    </DescriptionSection>
);