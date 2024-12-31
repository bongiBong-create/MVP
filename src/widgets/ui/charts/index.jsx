import { Chart } from "../../../shared"

export const Charts = () => {
    /* Получение данных для графиков
     const user = useSelector((state) => state.auth.user);
     const [chart, setChart] = useState([]);
   
     const getDataById = async (id) => {
     const response = await fetch(`${API_UNIVERSITI}=${id}`);
     const data = await response.json();
   
     setChart(data);
     };
   
     useEffect(() => {
     getDataById(user.id);
     }, []);
     */

    const chart = [
        {
            type: "histogram",
            title: "TITLE",
            values: [
                {
                    name: "Типология, кадровой политики",
                    value: 2.3,
                },
                {
                    name: "Наличие формализованной КП",
                    value: 2.2,
                },
                {
                    name: "Наличие КС и плана её реализации, обеспеченной ресурсами",
                    value: 1.9,
                },
                {
                    name: "Статус и уровень ответственности HR блока вузе",
                    value: 1.5,
                },
            ],
        },
        {
            type: "round",
            title: "TITLE",
            values: [
                {
                    name: "Кадровой политики нет",
                    value: 12,
                },
                {
                    name: "Реактивная",
                    value: 14,
                },
                {
                    name: "Проактивная закрытая",
                    value: 10,
                },
                {
                    name: "Проактивная",
                    value: 26,
                },
                {
                    name: "Проактивная открытая",
                    value: 7,
                },
            ],
        },
    ];
    return (
        <div id="graphic" className="graphic">
            <h1>TITLE</h1>
            {chart.map((char, i) => (
                <Chart
                    key={i}
                    title={char.title}
                    type={char.type}
                    values={char.values}
                />
            ))}
        </div>
    )
}