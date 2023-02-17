
import { Navbar, Link, Text, Dropdown, User } from "@nextui-org/react";
import { Layout } from "./Layout.jsx";

import { icons } from "./Icons.js";
import avatar from './logo.jpg'

export default function Barra() {

    return (
        <Layout>
            <Navbar isBordered variant="sticky">
                <Navbar.Toggle showIn="xs" />
                <Navbar.Brand
                    css={{
                        "@xs": {
                            w: "12%",
                        },
                    }}
                >
                    <Text b color="inherit" hideIn="xs">
                        Bienvenidos!
                    </Text>
                </Navbar.Brand>
                <Navbar.Content
                    enableCursorHighlight
                    activeColor="primary"
                    hideIn="xs"
                    variant="highlight-rounded"

                >
                    <Navbar.Link isActive href="/">Inicio</Navbar.Link>

                    <Dropdown isBordered>
                        <Navbar.Item>
                            <Dropdown.Button
                                auto
                                light
                                css={{
                                    px: 0,
                                    dflex: "center",
                                    svg: { pe: "none" },
                                }}
                                // iconRight={iconClasses.chevron}
                                ripple={false}
                            >
                                Impuestos
                            </Dropdown.Button>
                        </Navbar.Item>
                        <Dropdown.Menu
                            aria-label="ACME features"
                            css={{
                                $$dropdownMenuWidth: "340px",
                                $$dropdownItemHeight: "70px",
                                "& .nextui-dropdown-item": {
                                    py: "$4",
                                    // dropdown item left icon
                                    svg: {
                                        color: "$secondary",
                                        mr: "$4",
                                    },
                                    // dropdown item title
                                    "& .nextui-dropdown-item-content": {
                                        w: "100%",
                                        fontWeight: "$semibold",
                                    },
                                },
                            }}
                        >

                            <Dropdown.Item
                                key="pagarImpuestos"
                                showFullDescription
                                description="¿Por qué se pagan los impuestos?"
                                icon={icons.flash}
                            >
                                <Navbar.Link href="/uno">Pagar Impuestos</Navbar.Link>
                            </Dropdown.Item>
                            <Dropdown.Item
                                key="queDeboPagar"
                                showFullDescription
                                description="Averigua que impuestos debes de pagar"
                                icon={icons.user}

                            >

                                <Navbar.Link href="/dos">¿Qué impuestos debo pagar?</Navbar.Link>
                            </Dropdown.Item>
                            <Dropdown.Item
                                key="calculadoraImpuestos"
                                showFullDescription
                                description="Calcula los impuestos a pagar."
                                icon={icons.activity}
                            >

                                <Navbar.Link href="/tres">Calculadora de Impuestos</Navbar.Link>
                            </Dropdown.Item>



                        </Dropdown.Menu>


                    </Dropdown>
                    <Dropdown isBordered>
                        <Navbar.Item>
                            <Dropdown.Button
                                auto
                                light
                                css={{
                                    px: 0,
                                    dflex: "center",
                                    svg: { pe: "none" },
                                }}
                                // iconRight={iconClasses.chevron}
                                ripple={false}
                            >
                                Estadisticas
                            </Dropdown.Button>
                        </Navbar.Item>
                        <Dropdown.Menu
                            aria-label="ACME features"
                            css={{
                                $$dropdownMenuWidth: "340px",
                                $$dropdownItemHeight: "70px",
                                "& .nextui-dropdown-item": {
                                    py: "$4",
                                    // dropdown item left icon
                                    svg: {
                                        color: "$secondary",
                                        mr: "$4",
                                    },
                                    // dropdown item title
                                    "& .nextui-dropdown-item-content": {
                                        w: "100%",
                                        fontWeight: "$semibold",
                                    },
                                },
                            }}
                        >

                            <Dropdown.Item
                                key="autoscaling"
                                showFullDescription
                                description="Sigue estos consejos para comenzar a ahorrar."
                                icon={icons.user}
                            >

                                <Navbar.Link href="/cuatro">Consejos de ahorro</Navbar.Link>

                            </Dropdown.Item>
                            <Dropdown.Item
                                key="usage_metrics"
                                showFullDescription
                                description="Gráfica en donde puedes ver el flujo de tus ahorros."
                                icon={icons.activity}
                            >
                                <Navbar.Link href="/cinco">Gráfica de ahorro</Navbar.Link>
                            </Dropdown.Item>
                            <Dropdown.Item
                                key="production_ready"
                                showFullDescription
                                description="Gráfica en donde puedes ver el flujo de tus gastos"
                                icon={icons.activity}
                            >
                                <Navbar.Link href="/seis">Gráfica de gastos</Navbar.Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Navbar.Link href="/siete">Plan de retiro</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content
                    css={{
                        "@xs": {
                            w: "12%",
                            jc: "flex-end",
                        },
                    }}
                >
                    <Dropdown placement="bottom-right">
                        <Navbar.Item>
                            <Dropdown.Trigger>
                                <User
                                    bordered
                                    as="button"
                                    color="primary"
                                    size="md"
                                    src={avatar}
                                />
                            </Dropdown.Trigger>
                        </Navbar.Item>
                        <Dropdown.Menu
                            aria-label="User menu actions"
                            color="success"
                            onAction={(actionKey) => console.log({ actionKey })}
                        >
                            <Dropdown.Item key="profile" css={{ height: "$18" }}>
                                <Text b color="inherit" css={{ d: "flex" }}>
                                Toma decisiones financieras más informadas 
                                </Text>
                            </Dropdown.Item>
                            <Dropdown.Item key="settings" withDivider color="primary">
                                <Link href="https://www.gtc.com.gt">
                                Ir a mi banca virtual
                                </Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Content>





                <Navbar.Collapse disableAnimation>
                    <Navbar.CollapseItem key="About me" activeColor="primary">
                        <Link color="primary" css={{ minWidth: "100%", }} href="/" >
                            Quienes somos
                        </Link>
                    </Navbar.CollapseItem>
                    <Navbar.CollapseItem key="Tecnologies" activeColor="primary">
                        <Link color="primary" css={{ minWidth: "100%", }} href="/especificaciones" >
                            Especificaciones
                        </Link>
                    </Navbar.CollapseItem>
                    <Navbar.CollapseItem key="Contact" activeColor="primary">
                        <Link color="primary" css={{ minWidth: "100%", }} href="/productos" >
                            Productos
                        </Link>
                    </Navbar.CollapseItem>
                </Navbar.Collapse>
            </Navbar>
        </Layout>
    );
}