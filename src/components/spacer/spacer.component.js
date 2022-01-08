import React from "react";
import styled, {useTheme} from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (position, size, theme) => {
  const property = positionVariant[position];
  const sizeIndex = sizeVariant[size];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

export const Spacer = ({ position, size, children }) => {
    const theme = useTheme();
    const variant = getVariant(position, size, theme)
    return (
        <SpacerView variant={variant} >
            {children}
        </SpacerView>
    )
}

// export const Spacer = styled.View`
//   ${(position, size, theme) => getVariant(position, size, theme)}
// `; bu sekilde yazinca android de hata veriyor Spacer View i ekleyip Spaceri yukardaki gibi yaziyoruz

Spacer.defaultProps = {
  position: "top",
  size: "small",
};

//dikkatli okursan burayi anlayabilirsin gorundugu kadar karmasik degil
