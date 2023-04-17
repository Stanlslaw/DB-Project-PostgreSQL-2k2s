import React from "react";
import "./MainSection.scss";
import {
  Breadcrumb,
  Carousel,
  Form,
  Rate,
  Tabs,
  Input,
  Button,
  Collapse,
  Descriptions,
} from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import heartImg from "./files/heart.svg";

import koleso from "./files/koleso.jpg";
import FormItem from "antd/es/form/FormItem";

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
};
export default function MainSection() {
  const [TabChosedState, SetTabChosedState] = useState(1);
  console.log(TabChosedState);
  return (
    <div className="mainSection">
      <div className="mainZone">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Главная</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/catalog">Каталог</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Товар</Breadcrumb.Item>
        </Breadcrumb>
        <div className="mainSectionContainer">
          <form className="product">
            <div className="productImages">
              <Carousel>
                <div className="productImage">
                  <img src={koleso} alt="товар" />
                </div>
                <div className="productImage">
                  <img src={koleso} alt="товар" />
                </div>
                <div className="productImage">
                  <img src={koleso} alt="товар" />
                </div>
                <div className="productImage">
                  <img src={koleso} alt="товар" />
                </div>
              </Carousel>
            </div>
            <div className="productSkuContainer">
              <div className="productSku">Артикул: 123456</div>
            </div>
            <div className="productTitleContainer">
              <h1 className="productTitle">Колесо Belshina</h1>
            </div>
            <div className="productControlsContainer">
              <div className="productControls">
                <div className="productRaiting">
                  <Rate className="rate" />
                </div>
                <div className="productFavorites">
                  <button className="Button">
                    <span className="controlImg">
                      <img src={heartImg} alt="избр" />
                    </span>
                    <span className="controlText">В избранное</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="productVariantsContainer"></div>
            <div className="productBuyContainer">
              <div className="productBuy">
                <div className="productPrice">
                  <span>100 Byn</span>
                </div>
                <div className="productBuyButtonContainer">
                  <button className="productBuyButton">
                    <span>Купить</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="productDescriptionContainer">
              <div className="productDescription">
                Белшина — белорусский производитель бюджетных автомобильных
                покрышек, основанный в 1963 году. Компания производит летние,
                зимние и всесезонные шины для легковых автомобилей,
                микроавтобусов, грузовиков и с/х техники. Страна производитель:
                Беларусь.
              </div>
            </div>
          </form>
          <div className="tabs">
            {useSelector((state) =>
              state.windowSize.width > 550 ? (
                <Tabs
                  type="card"
                  tabBarStyle={{ color: "black !important" }}
                  style={{ color: "black" }}
                  onChange={SetTabChosedState}
                >
                  <Tabs.TabPane tab="Описание" key="1">
                    <p>
                      ОАО «Белшина» — производитель автомобильных шин. Выпускает
                      шины для легковых, грузовых, большегрузных автомобилей,
                      строительно-дорожных и подъёмно-транспортных машин,
                      электротранспорта, автобусов, тракторов и
                      сельскохозяйственных машин.
                    </p>
                    <p>
                      Около 90 % шин, выпускаемых на комбинате, являются
                      радиальными.
                    </p>
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Характеристики" key="2">
                    <Descriptions title="Шина" size="middle">
                      <Descriptions.Item label="Производитель">
                        «Белшина»
                      </Descriptions.Item>
                      <Descriptions.Item label="Ширина">205</Descriptions.Item>
                      <Descriptions.Item label="Высота">205</Descriptions.Item>
                      <Descriptions.Item label="Размер">15</Descriptions.Item>
                    </Descriptions>
                  </Tabs.TabPane>
                  <Tabs.TabPane
                    tab="Отзывы"
                    key="3"
                    style={
                      TabChosedState == 3
                        ? {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }
                        : {
                            display: "none",
                          }
                    }
                  >
                    <Form
                      labelCol={{
                        flex: "110px",
                      }}
                      wrapperCol={{
                        flex: "1",
                      }}
                      labelAlign="left"
                      labelWrap
                      style={{ maxWidth: "600px", minWidth: "600px" }}
                      validateMessages={validateMessages}
                    >
                      <Form.Item
                        name={["user", "email"]}
                        label="Email"
                        rules={[
                          {
                            required: true,
                            type: "email",
                          },
                        ]}
                      >
                        <Input></Input>
                      </Form.Item>
                      <FormItem
                        name={["user", "name"]}
                        label="Имя"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Input></Input>
                      </FormItem>
                      <Form.Item
                        label="Отзыв"
                        name={["user", "message"]}
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Input.TextArea maxLength={250} showCount />
                      </Form.Item>
                      <Form.Item
                        wrapperCol={{
                          wrapperCol: 12,
                          offset: 20,
                        }}
                      >
                        <Button type="primary" htmlType="submit">
                          Отправить
                        </Button>
                      </Form.Item>
                    </Form>
                    <div className="reviewsContainer">
                      <div className="reviewItem">
                        <div className="reviewItemHeader">
                          <div className="reviewItemName">Имя</div>
                          <div className="reviewItemEmail">@idwkd</div>
                          <div className="reviewItemDate">12.12.2022 14:56</div>
                          <div className="reviewItemComment">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lo
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                </Tabs>
              ) : (
                <Collapse bordered={false} className="collapse">
                  <Collapse.Panel header="Описание" key="1">
                    <p>
                      ОАО «Белшина» — производитель автомобильных шин. Выпускает
                      шины для легковых, грузовых, большегрузных автомобилей,
                      строительно-дорожных и подъёмно-транспортных машин,
                      электротранспорта, автобусов, тракторов и
                      сельскохозяйственных машин.
                    </p>
                    <p>
                      Около 90 % шин, выпускаемых на комбинате, являются
                      радиальными.
                    </p>
                  </Collapse.Panel>
                  <Collapse.Panel header="Характеристики" key="2">
                    <Descriptions title="Шина" size="middle">
                      <Descriptions.Item label="Производитель">
                        «Белшина»
                      </Descriptions.Item>
                      <Descriptions.Item label="Ширина">205</Descriptions.Item>
                      <Descriptions.Item label="Высота">205</Descriptions.Item>
                      <Descriptions.Item label="Размер">15</Descriptions.Item>
                    </Descriptions>
                  </Collapse.Panel>
                  <Collapse.Panel header="Отзывы" key="3">
                    <Form
                      labelCol={{
                        flex: "70px",
                      }}
                      wrapperCol={{
                        flex: "1",
                      }}
                      labelAlign="left"
                      labelWrap
                      style={{ maxWidth: "600px" }}
                      validateMessages={validateMessages}
                    >
                      <Form.Item
                        name={["user", "email"]}
                        label="Email"
                        rules={[
                          {
                            required: true,
                            type: "email",
                          },
                        ]}
                      >
                        <Input></Input>
                      </Form.Item>
                      <FormItem
                        name={["user", "name"]}
                        label="Имя"
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Input></Input>
                      </FormItem>
                      <Form.Item
                        label="Отзыв"
                        name={["user", "message"]}
                        rules={[
                          {
                            required: true,
                          },
                        ]}
                      >
                        <Input.TextArea maxLength={250} showCount />
                      </Form.Item>
                      <Form.Item
                        wrapperCol={{
                          offset: 6,
                          span: 12,
                        }}
                      >
                        <Button type="primary" htmlType="submit">
                          Отправить
                        </Button>
                      </Form.Item>
                    </Form>
                    <div className="reviewsContainer">
                      <div className="reviewItem">
                        <div className="reviewItemHeader">
                          <div className="reviewItemName">Имя</div>
                          <div className="reviewItemEmail">@idwkd</div>
                          <div className="reviewItemDate">12.12.2022 14:56</div>
                          <div className="reviewItemComment">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lo
                          </div>
                        </div>
                      </div>
                    </div>
                  </Collapse.Panel>
                </Collapse>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
