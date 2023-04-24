import "./MainSection.scss";

import { Link } from "react-router-dom";
import {
  Breadcrumb,
  Result,
  Button,
  Steps,
  message,
  List,
  Card,
  InputNumber,
  DatePicker,
  Input,
  Space,
  Select,
  Popconfirm,
} from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useSelector } from "react-redux";
import chip from "./files/chip.png";

export default function Main(props) {
  const [current, setCurrent] = useState(0);
  const [cardNumber, setCardNumber] = useState("");
  const steps = [
    {
      title: "Мой заказ",
      description: "Состав заказа",
    },
    {
      title: "Доставка",
      description: "Выберите тип доставки",
    },
    {
      title: "Оплата",
    },
  ];
  const itemData = ["Шина Белшина", "Диск rebbot"];
  const userData = [
    "Анатолий Поборцев Егорович",
    "г. Орша ул. Могилевская д. 99 кв. 65",
  ];
  const formatCreditCardNumber = (value) => {
    const pattern = /(\d{1,4})/g;
    const matches = value.match(pattern);
    return matches ? matches.join(" ") : "";
  };
  const handleCardNumber = (event) => {
    const inputValue = event.target.value.replace(/\D/g, ""); // удалить все, кроме цифр
    const formattedValue = formatCreditCardNumber(inputValue);
    setCardNumber(formattedValue);
  };
  const handleDeleteFromList = () => {
    message.success("Товар Удален из корзины.");
  };
  return (
    <main className="mainSectionOrders">
      <div className="mainZone">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Главная</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/basket">Корзина</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Оформление заказа</Breadcrumb.Item>
        </Breadcrumb>
        <div className="mainContainer">
          <div className="steps">
            <Steps size="small" items={steps} current={current} />
          </div>
          <div className="OrderContent">
            {current == 0 && (
              <>
                <List
                  header={
                    <div className="ListHeader">Список товаров заказа</div>
                  }
                  footer={
                    <div className="ListFooterContainer">
                      <span className="ListTotalPriceTitle">
                        Итоговая стоимоть:
                      </span>
                      <span className="ListTotalPrice">1300</span>
                    </div>
                  }
                  className="itemList"
                  bordered
                  dataSource={itemData}
                  renderItem={(item) => (
                    <List.Item>
                      <div className="itemContainer">
                        <Link
                          to="/catalog/item?009"
                          lang="ru"
                          className="itemName"
                        >
                          {item}
                        </Link>
                        <div className="itemHandleButtons">
                          <div className="itemPricePerOne">100 x</div>
                          <InputNumber min={1} max={100} defaultValue={1} />
                          <Popconfirm
                            placement="topRight"
                            title={"Удалить товар?"}
                            description={
                              "Вы действительно хотите удалить товар из заказа?"
                            }
                            onConfirm={handleDeleteFromList}
                            okText="Да"
                            cancelText="Нет"
                          >
                            <Button
                              type="primary"
                              danger
                              icon={<CloseCircleOutlined />}
                            />
                          </Popconfirm>
                        </div>
                      </div>
                    </List.Item>
                  )}
                />
                <div className="handleSteps">
                  <Button
                    style={{ justifySelf: "flex-end" }}
                    type="primary"
                    onClick={() => {
                      setCurrent(current + 1);
                    }}
                  >
                    Далее
                  </Button>
                </div>
              </>
            )}
            {current == 1 && (
              <>
                <List
                  header={
                    <div className="DeliveryHeader">
                      <div>Тип доставки: </div>
                      <Select
                        className="SelectDeliveryType"
                        defaultActiveFirstOption={true}
                        defaultValue="Самовывоз"
                        options={[
                          { value: "Самовывоз" },
                          { value: "Отправка Курьером" },
                        ]}
                      />
                    </div>
                  }
                  className="itemList"
                  bordered
                  dataSource={userData}
                  renderItem={(item, index) => {
                    if (item === null) return;
                    switch (index) {
                      case 0:
                        return <List.Item>ФИО: {item}</List.Item>;
                      case 1:
                        return <List.Item>Адрес: {item}</List.Item>;
                      default:
                        return;
                    }
                  }}
                />
                <div className="handleSteps">
                  <Button
                    type="primary"
                    onClick={() => {
                      setCurrent(current - 1);
                    }}
                  >
                    Назад
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => {
                      setCurrent(current + 1);
                    }}
                  >
                    Далее
                  </Button>
                </div>
              </>
            )}
            {current == 2 && (
              <>
                <form className="cardContainer">
                  <div className="cardChip">
                    <img alt="чип" src={chip} />
                  </div>
                  <div className="cardNumber">
                    <Input
                      maxLength={19}
                      value={cardNumber}
                      placeholder="1234 5678 9012 3456"
                      className="nums"
                      onChange={handleCardNumber}
                    />
                  </div>
                  <div className="cardDate">
                    <DatePicker
                      placeholder="00/00"
                      format={"MM/YY"}
                      style={{ width: "80px", height: "28px" }}
                    />
                  </div>
                </form>
                <div className="handleSteps">
                  <Button
                    type="primary"
                    onClick={() => {
                      setCurrent(current - 1);
                    }}
                  >
                    Назад
                  </Button>
                  <Button
                    type="primary"
                    onClick={() => {
                      setCurrent(current + 1);
                    }}
                  >
                    Оплатить
                  </Button>
                </div>
              </>
            )}
            {current == 3 && (
              <Result
                status="success"
                title="Ваш заказ успешно оформлен!"
                subTitle="Номер вашего заказа: 2017182818828182881. Мы свяжемся с вами в ближайшее время."
                extra={[
                  <Button key="buy">
                    <Link to="/catalog">Вернуть к покупкам</Link>
                  </Button>,
                ]}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
