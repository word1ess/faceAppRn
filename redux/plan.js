import { createSlice } from "@reduxjs/toolkit";
import CustomText from "../Components/Сommon/CustomText";

const initialState = {
  items: [
    {
      title: "Стайлинг овала лица",
      priority: "Первый приоритет",
      text: [
        <CustomText
          text="СТАЙЛИНГ ОВАЛА ЛИЦА "
          fontSize={20}
          marginBottom={16}
          color="#D6A731"
          fontUpperCase={true}
        />,
        <CustomText
          text="Утро"
          fontSize={20}
          marginBottom={16}
          textAlign="left"
        />,
        <CustomText
          text="Выберите правильную стрижку. Подберите укладку, подходящую вашему типу лица:"
          fontSize={16}
          marginBottom={8}
          textAlign="left"
        />,
        <CustomText
          text="Круглое лицо: Создайте объем сверху и удлините лицо за счет асимметричной укладки или длинных прядей."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="Квадратное лицо: Используйте мягкие волны или локоны, чтобы смягчить резкие линии."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="Овальное лицо: Большинство стилей подойдет, но можно добавить текстуры для выделения черт."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="Треугольное лицо: Уравновесьте верхнюю часть с помощью объема и волн."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="Контуринг для всех типов лиц"
          fontSize={16}
          marginBottom={8}
          textAlign="left"
        />,
        <CustomText
          text="Круглое лицо: Затемните зоны под скулами и вдоль линии челюсти, чтобы визуально сузить лицо."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="Квадратное лицо: Смягчите углы, затемнив область челюсти и добавив светлые тона на лоб и подбородок."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="Овальное лицо: Легкий контуринг скул для акцента."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="Треугольное лицо: Добавьте тень по бокам лба и челюсти для балансировки формы."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="Днем"
          fontSize={20}
          marginBottom={16}
          marginTop={32}
          textAlign="left"
        />,
        <CustomText
          text="Поддержание укладки:"
          fontSize={16}
          marginBottom={8}
          textAlign="left"
        />,
        <CustomText
          text="Для всех типов лица: Освежите укладку сухим шампунем, добавьте объем в корни, если волосы потеряли форму. Для длинных волос — слегка поднимите пряди руками для создания текстуры."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="Вечером"
          fontSize={20}
          marginBottom={16}
          marginTop={32}
          textAlign="left"
        />,
        <CustomText
          text="Очистите лицо и волосы:"
          fontSize={16}
          marginBottom={8}
          textAlign="left"
        />,
        <CustomText
          text="Тщательно снимите макияж, очистите кожу и используйте легкий увлажняющий крем."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="Если использовали укладочные средства, можете помыть волосы или, при необходимости, просто освежить их с помощью несмываемого кондиционера."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
      ],
    },
    {
      title: "Приведение в порядок бровей",
      priority: "Второй приоритет",
      text: [
        <CustomText
          text="Приведение в порядок бровей"
          fontSize={20}
          marginBottom={16}
          fontUpperCase={true}
          color="#D6A731"
        />,
        <CustomText
          text="Утро"
          fontSize={20}
          marginBottom={16}
          textAlign="left"
        />,
        <CustomText
          text="Корректировка формы:"
          fontSize={16}
          marginBottom={8}
          textAlign="left"
        />,
        <CustomText
          text="Круглое лицо: Подходят более угловатые, изогнутые брови, чтобы зрительно удлинить лицо."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="Квадратное лицо: Более мягкие, округлые брови смягчат черты лица."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="Овальное лицо: Подойдет естественная форма с легким изгибом."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="Треугольное лицо: Более широкие, прямые брови помогут сбалансировать верхнюю часть лица."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="Ежедневный уход за бровями"
          fontSize={16}
          marginBottom={8}
          textAlign="left"
        />,
        <CustomText
          text="Аккуратно расчешите брови специальной щеточкой для придания аккуратной формы."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="При необходимости подкрасьте брови карандашом, тенями или помадой, соблюдая натуральный оттенок. Для естественного эффекта используйте короткие штрихи, имитируя волоски."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="Закрепите форму гелем для бровей, чтобы они держались в течение дня."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,

        <CustomText
          text="Днем"
          fontSize={20}
          marginBottom={16}
          marginTop={32}
          textAlign="left"
        />,
        <CustomText
          text="Освежите брови:"
          fontSize={16}
          marginBottom={8}
          textAlign="left"
        />,
        <CustomText
          text="Если ваши брови потеряли форму или стали менее выразительными, слегка прочешите их щеточкой и добавьте немного геля для фиксации."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="Вечером"
          fontSize={20}
          marginBottom={16}
          marginTop={32}
          textAlign="left"
        />,
        <CustomText
          text="Коррекция и уход:"
          fontSize={16}
          marginBottom={8}
          textAlign="left"
        />,
        <CustomText
          text="Осмотрите брови при хорошем освещении и удалите лишние волоски пинцетом, избегая частого выщипывания, чтобы сохранить естественную густоту."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="Увлажните кожу вокруг бровей кремом или маслом для бровей (например, касторовым), чтобы стимулировать рост и укрепить волоски."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
      ],
    },
    {
      title: "Корректировка подбородка",
      priority: "Третий приоритет",
      text: [
        <CustomText
          text="Корректировка подбородка"
          fontSize={20}
          marginBottom={16}
          fontUpperCase={true}
          color="#D6A731"
        />,
        <CustomText
          text="Утро"
          fontSize={20}
          marginBottom={16}
          textAlign="left"
        />,
        <CustomText
          text="Контуринг подбородка"
          fontSize={16}
          marginBottom={8}
          textAlign="left"
        />,
        <CustomText
          text="Нанесите темный тон (бронзер) вдоль нижней линии челюсти и подбородка, чтобы уменьшить его объем."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="Для дополнительного акцента добавьте светлый хайлайтер на центр подбородка, чтобы смягчить его форму."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="Используйте макияж для шеи: плавное затемнение вдоль шеи поможет визуально сузить нижнюю часть лица."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,

        <CustomText
          text="Упражнения для укрепления подбородка (фейсбилдинг)"
          fontSize={16}
          marginBottom={8}
          textAlign="left"
        />,
        <CustomText
          text="'Подтягивание губ': Вытягивайте губы вперед, имитируя поцелуй, и задержитесь в этом положении на 5-10 секунд."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="'Поднятие подбородка': Поднимите голову вверх и потянитесь подбородком вперед, удерживая это положение на 5-10 секунд."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,

        <CustomText
          text="Днем"
          fontSize={20}
          marginBottom={16}
          marginTop={32}
          textAlign="left"
        />,
        <CustomText
          text="Коррекция формы с помощью осанки:"
          fontSize={16}
          marginBottom={8}
          textAlign="left"
        />,
        <CustomText
          text="Поддерживайте правильную осанку: ровная спина и вытянутая шея помогут подбородку выглядеть более подтянутым. Избегайте сутулости, которая может визуально утяжелить нижнюю часть лица."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="Вечером"
          fontSize={20}
          marginBottom={16}
          marginTop={32}
          textAlign="left"
        />,
        <CustomText
          text="Уход за кожей в области подбородка и шеи:"
          fontSize={16}
          marginBottom={8}
          textAlign="left"
        />,
        <CustomText
          text="Очистите кожу лица и шеи мягким средством, уделяя внимание области подбородка."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="Нанесите ночной крем или сыворотку с лифтинг-эффектом на подбородок и шею, чтобы улучшить тонус кожи и предотвратить провисание."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="Снова выполните упражнения для подбородка, уделив этому 5-10 минут перед сном, чтобы поддерживать мышечный тонус."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
      ],
    },
    {
      title: "Уход за кожей",
      priority: "Четвертый приоритет",
      text: [
        <CustomText
          text="Уход за кожей"
          fontSize={20}
          marginBottom={16}
          fontUpperCase={true}
          color="#D6A731"
        />,
        <CustomText
          text="Утро"
          fontSize={20}
          marginBottom={16}
          textAlign="left"
        />,
        <CustomText
          text="Очищение кожи:"
          fontSize={16}
          marginBottom={8}
          textAlign="left"
        />,
        <CustomText
          text="Сухая кожа: Используйте увлажняющий гель или молочко для умывания."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="Жирная кожа: Применяйте пенку или гель с себорегулирующим эффектом."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="Комбинированная кожа: Подберите средство, которое не сушит и не пересушивает разные зоны лица."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="Промокните лицо полотенцем, избегая трения."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,

        <CustomText
          text="Тонизация"
          fontSize={16}
          marginBottom={8}
          textAlign="left"
        />,
        <CustomText
          text="Нанесите тоник, чтобы восстановить pH-баланс кожи и подготовить её к дальнейшему уходу."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="Увлажнение и защита"
          fontSize={16}
          marginBottom={8}
          textAlign="left"
        />,
        <CustomText
          text="Нанесите дневной увлажняющий крем, подходящий вашему типу кожи. Для жирной кожи подойдут легкие гели, для сухой — плотные кремы с маслами."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="Обязательно используйте солнцезащитный крем с SPF 30+ для защиты от вредного воздействия ультрафиолетовых лучей. Даже зимой и в пасмурную погоду."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,

        <CustomText
          text="Днем"
          fontSize={20}
          marginBottom={16}
          marginTop={32}
          textAlign="left"
        />,
        <CustomText
          text="Освежение кожи:"
          fontSize={16}
          marginBottom={8}
          textAlign="left"
        />,
        <CustomText
          text="В течение дня используйте термальную воду или спрей с увлажняющим эффектом для поддержания свежести кожи."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="При необходимости воспользуйтесь матирующими салфетками, чтобы убрать лишний блеск с жирных участков."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="Вечером"
          fontSize={20}
          marginBottom={16}
          marginTop={32}
          textAlign="left"
        />,
        <CustomText
          text="Очищение:"
          fontSize={16}
          marginBottom={8}
          textAlign="left"
        />,
        <CustomText
          text="Тщательно снимите макияж с помощью средства для демакияжа или мицеллярной воды."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="Умойтесь мягким очищающим средством, чтобы удалить загрязнения, накопившиеся за день."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="Отшелушивание (1-2 раза в неделю):"
          fontSize={16}
          marginBottom={8}
          textAlign="left"
        />,
        <CustomText
          text="Используйте мягкий скраб или кислотный пилинг, чтобы удалить омертвевшие клетки и стимулировать обновление кожи."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="Питание и восстановление:"
          fontSize={16}
          marginBottom={8}
          textAlign="left"
        />,
        <CustomText
          text="Нанесите ночной увлажняющий крем или сыворотку с активными компонентами (ретинол, гиалуроновая кислота, витамины C и E), чтобы восстановить кожу во время сна."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="Особое внимание уделите области вокруг глаз, применяя крем с антивозрастным или увлажняющим эффектом."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
        <CustomText
          text="Дополнительный уход"
          fontSize={20}
          marginBottom={16}
          marginTop={32}
          textAlign="left"
        />,
        <CustomText
          text="Раз в неделю используйте увлажняющие или очищающие маски, подходящие вашему типу кожи, чтобы поддерживать её здоровый и сияющий вид."
          fontSize={14}
          paddingLeft={32}
          textAlign="left"
          color="#90BDF3"
        />,
      ],
    },
  ],
  practice: [
    {
      text: "Ежедневная практика",
      isDone: false,
    },
    {
      text: "Приведение в порядок бровей",
      isDone: false,
    },
    {
      text: "Корректировка подбородка",
      isDone: false,
    },
    {
      text: "Уход за кожей",
      isDone: false,
    },
  ],
};

export const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    setPlan: (state, action) => {
      state.items = [...action.payload];
    },
    setPracticeToggle: (state, action) => {
      const currentStatus = state.practice[action.payload].isDone;
      state.practice[action.payload].isDone = !currentStatus;
    },
  },
});

export const { setPlan, setPracticeToggle } = planSlice.actions;

export default planSlice.reducer;
