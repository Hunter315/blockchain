import { lazy, useEffect } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import React from 'react'

import * as S from "./styles";

const Button = lazy(() => import("../../common/Button"));

const MiddleBlock = ({ title, content, button, t }) => {
const [isShowSearch, setShowSearch] = React.useState(false)

  const showSearch = (val) => {
    console.log("this middle click baby");
    setShowSearch(val);
    console.log("isShowSearch",isShowSearch)

   
  };

  React.useEffect(() => {



  }, [isShowSearch])
  return (
    <div>
    <S.MiddleBlock >
      <Row type="flex" justify="center" align="middle">
        <Fade bottom>
          <S.ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <S.Content>{t(content)}</S.Content>
              {button ? (
                <Button
                  name="submit"
                  type="submit"
                  onClick={() => showSearch(true)}
                >
                  {t(button)}
                </Button>
              ) : (
                ""
              )}
            </Col>
            
          </S.ContentWrapper>
        </Fade>
      </Row>
    </S.MiddleBlock>
      </div>
  );
};

export default withTranslation()(MiddleBlock);
