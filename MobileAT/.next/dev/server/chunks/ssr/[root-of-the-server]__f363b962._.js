module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/Tarefa13/data/questoes.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ===== Tipagem e lista de questões =====
__turbopack_context__.s([
    "questions",
    ()=>questions
]);
const questions = [
    {
        id: 1,
        enunciado: "O que significa o conceito 'Mobile-First' no design responsivo?",
        opcoes: [
            "Criar primeiro para desktop e depois adaptar para mobile.",
            "Projetar primeiro para dispositivos móveis e depois expandir para telas maiores.",
            "Usar apenas tecnologias nativas de mobile.",
            "Focar apenas em performance no celular."
        ],
        correta: 1,
        justificativa: "Mobile-First significa iniciar o design e desenvolvimento priorizando dispositivos móveis, garantindo boa experiência em telas pequenas antes de expandir para desktops."
    },
    {
        id: 2,
        enunciado: "Qual unidade de medida é mais recomendada para layouts responsivos?",
        opcoes: [
            "px",
            "em",
            "rem",
            "vh/vw"
        ],
        correta: 3,
        justificativa: "As unidades relativas como 'vh' (viewport height) e 'vw' (viewport width) se adaptam ao tamanho da tela, tornando o layout responsivo."
    },
    {
        id: 3,
        enunciado: "Qual princípio está diretamente ligado à usabilidade?",
        opcoes: [
            "A estética do design deve ser mais importante que a clareza.",
            "O usuário deve atingir seus objetivos de forma eficiente e intuitiva.",
            "As cores devem ser sempre vibrantes.",
            "A interface deve ter o máximo de elementos possível."
        ],
        correta: 1,
        justificativa: "Usabilidade refere-se à facilidade com que o usuário realiza tarefas e entende o sistema de forma clara e intuitiva."
    },
    {
        id: 4,
        enunciado: "Qual abordagem melhora o desempenho e a experiência do usuário em mobile?",
        opcoes: [
            "Carregar todas as imagens em alta resolução de uma vez.",
            "Usar lazy loading para imagens e componentes.",
            "Usar apenas imagens grandes e redimensionar via CSS.",
            "Remover cache do navegador para evitar repetição de dados."
        ],
        correta: 1,
        justificativa: "O lazy loading carrega imagens e componentes apenas quando são necessários, otimizando a performance especialmente em dispositivos móveis."
    },
    {
        id: 5,
        enunciado: "O que é design responsivo?",
        opcoes: [
            "Um design que muda de cor conforme o tema do usuário.",
            "Um design que se adapta a diferentes tamanhos e orientações de tela.",
            "Um design feito exclusivamente para celulares.",
            "Um design que responde a cliques do usuário."
        ],
        correta: 1,
        justificativa: "Design responsivo adapta automaticamente o layout e os elementos visuais para se ajustarem a diferentes tamanhos e orientações de tela."
    },
    {
        id: 6,
        enunciado: "Em um layout Mobile-First, o que acontece ao aumentar o tamanho da tela?",
        opcoes: [
            "Nada, o design é fixo para mobile.",
            "As regras CSS adicionam estilos para telas maiores usando media queries.",
            "O design se torna automaticamente um app desktop.",
            "A interface se desorganiza para caber mais conteúdo."
        ],
        correta: 1,
        justificativa: "No Mobile-First, estilos básicos são definidos para telas pequenas e, com media queries, são adicionados estilos para telas maiores."
    },
    {
        id: 7,
        enunciado: "Qual propriedade CSS é comumente usada em layouts responsivos?",
        opcoes: [
            "position: absolute;",
            "float: left;",
            "display: flex;",
            "z-index"
        ],
        correta: 2,
        justificativa: "O Flexbox facilita a criação de layouts flexíveis e adaptáveis, sendo amplamente usado em design responsivo."
    },
    {
        id: 8,
        enunciado: "O que é acessibilidade no contexto da usabilidade de um site ou app?",
        opcoes: [
            "Um recurso para deixar o site mais bonito.",
            "Garantir que qualquer pessoa, incluindo pessoas com deficiência, possa usar o sistema.",
            "Apenas o uso de teclados especiais para navegação.",
            "Usar contraste de cores apenas em dark mode."
        ],
        correta: 1,
        justificativa: "Acessibilidade garante que pessoas com diferentes necessidades (visuais, motoras, cognitivas) consigam utilizar o sistema com eficiência."
    },
    {
        id: 9,
        enunciado: "Qual a melhor prática ao projetar botões para telas sensíveis ao toque?",
        opcoes: [
            "Usar botões pequenos para economizar espaço.",
            "Usar áreas clicáveis grandes e bem espaçadas.",
            "Evitar ícones e usar apenas texto.",
            "Usar cor neutra para todos os botões."
        ],
        correta: 1,
        justificativa: "Em dispositivos móveis, os botões devem ter áreas clicáveis amplas e bem espaçadas para evitar erros de toque e melhorar a usabilidade."
    },
    {
        id: 10,
        enunciado: "Por que é importante testar o design em múltiplos dispositivos?",
        opcoes: [
            "Para verificar se o site carrega rápido apenas em um modelo de celular.",
            "Para garantir compatibilidade e boa experiência em diferentes telas e navegadores.",
            "Apenas por motivos estéticos.",
            "Para diminuir o número de usuários no site."
        ],
        correta: 1,
        justificativa: "Testar o design em múltiplos dispositivos assegura que o layout e as interações funcionem corretamente em diferentes tamanhos de tela e sistemas."
    }
];
}),
"[project]/app/Tarefa13/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Quiz
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Paper/Paper.js [app-ssr] (ecmascript) <export default as Paper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-ssr] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Stack/Stack.js [app-ssr] (ecmascript) <export default as Stack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Divider/Divider.js [app-ssr] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/useMediaQuery/index.js [app-ssr] (ecmascript) <export default as useMediaQuery>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Tarefa13$2f$data$2f$questoes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/Tarefa13/data/questoes.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Quiz() {
    const [currentQuestion, setCurrentQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selectedOption, setSelectedOption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAnswered, setIsAnswered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const question = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Tarefa13$2f$data$2f$questoes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["questions"][currentQuestion];
    const isLandscape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$useMediaQuery$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useMediaQuery$3e$__["useMediaQuery"])("(orientation: landscape)");
    const handleAnswer = ()=>{
        if (selectedOption === null) return;
        setIsAnswered(true);
        if (selectedOption === question.correta) {
            setScore((prev)=>prev + 1);
        }
    };
    const handleNext = ()=>{
        setIsAnswered(false);
        setSelectedOption(null);
        if (currentQuestion < __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Tarefa13$2f$data$2f$questoes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["questions"].length - 1) {
            setCurrentQuestion((prev)=>prev + 1);
        } else {
            // Exibe a pontuação final
            alert(`Quiz finalizado! Sua pontuação: ${score}/${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Tarefa13$2f$data$2f$questoes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["questions"].length}`);
            // Reinicia o quiz
            setTimeout(()=>{
                setCurrentQuestion(0);
                setScore(0);
                setSelectedOption(null);
                setIsAnswered(false);
            }, 300);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Paper$2f$Paper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Paper$3e$__["Paper"], {
        elevation: 4,
        sx: {
            p: 3,
            maxWidth: 600,
            mx: "auto",
            mt: 4,
            borderRadius: 3,
            display: "flex",
            flexDirection: isLandscape ? "row" : "column",
            alignItems: "stretch",
            gap: 3
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stack$2f$Stack$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Stack$3e$__["Stack"], {
                spacing: 2,
                flex: 1,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "h6",
                        fontWeight: "bold",
                        children: question.enunciado
                    }, void 0, false, {
                        fileName: "[project]/app/Tarefa13/page.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    question.opcoes.map((opcao, index)=>{
                        const isSelected = selectedOption === index;
                        const isCorrect = question.correta === index;
                        let bgColor = "background.paper";
                        if (isAnswered && isCorrect) bgColor = "success.light";
                        else if (isAnswered && isSelected && !isCorrect) bgColor = "error.light";
                        else if (isSelected) bgColor = "action.selected";
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            onClick: ()=>!isAnswered && setSelectedOption(index),
                            sx: {
                                p: 1.5,
                                borderRadius: 2,
                                border: "1px solid",
                                borderColor: "divider",
                                cursor: isAnswered ? "default" : "pointer",
                                backgroundColor: bgColor,
                                transition: "0.3s",
                                "&:hover": {
                                    backgroundColor: isAnswered ? bgColor : "action.hover"
                                }
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "body1",
                                children: opcao
                            }, void 0, false, {
                                fileName: "[project]/app/Tarefa13/page.tsx",
                                lineNumber: 101,
                                columnNumber: 15
                            }, this)
                        }, index, false, {
                            fileName: "[project]/app/Tarefa13/page.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this);
                    }),
                    !isAnswered ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        variant: "contained",
                        onClick: handleAnswer,
                        disabled: selectedOption === null,
                        children: "Verificar Resposta"
                    }, void 0, false, {
                        fileName: "[project]/app/Tarefa13/page.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                                sx: {
                                    my: 1
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/Tarefa13/page.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this),
                            selectedOption === question.correta ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                color: "success.main",
                                fontWeight: "bold",
                                children: "✅ Acertou! +1 ponto"
                            }, void 0, false, {
                                fileName: "[project]/app/Tarefa13/page.tsx",
                                lineNumber: 118,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                color: "error.main",
                                fontWeight: "bold",
                                children: [
                                    "❌ Errou! Resposta correta:",
                                    " ",
                                    question.opcoes[question.correta]
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/Tarefa13/page.tsx",
                                lineNumber: 122,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "body2",
                                color: "text.secondary",
                                sx: {
                                    mt: 1
                                },
                                children: question.justificativa
                            }, void 0, false, {
                                fileName: "[project]/app/Tarefa13/page.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                variant: "outlined",
                                onClick: handleNext,
                                sx: {
                                    mt: 2
                                },
                                children: "Próxima Pergunta"
                            }, void 0, false, {
                                fileName: "[project]/app/Tarefa13/page.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Tarefa13/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            isLandscape && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    minWidth: 160,
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: 1,
                    borderLeft: "1px solid",
                    borderColor: "divider",
                    pl: 2
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "h6",
                        fontWeight: "bold",
                        children: [
                            "Pontos: ",
                            score
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Tarefa13/page.tsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "body2",
                        color: "text.secondary",
                        children: [
                            "Questão ",
                            currentQuestion + 1,
                            " de ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$Tarefa13$2f$data$2f$questoes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["questions"].length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/Tarefa13/page.tsx",
                        lineNumber: 157,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/Tarefa13/page.tsx",
                lineNumber: 141,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/Tarefa13/page.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f363b962._.js.map