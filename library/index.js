console.log(`
Итоговая оценка: 100/100

Вёрстка валидная +10

Вёрстка семантическая +16
    * <header>, <main>, <footer> +2.
    * шесть элементов <section> (по количеству секций) +2.
    * только один заголовок <h1> +2.
    * пять заголовков <h2> (легко отличимы на верхних границах секций, имеют единый стиль) +2.
    * один элемент <nav> (панель навигации в хедере) +2.
    * два списка ul > li > a (панель навигации, ссылки на соцсети в футере) +2.
    * семь кнопок <button> +2.
    * два инпута <input> +2.

Вёрстка соответствует макету +54
    * блок <header> +8:
        - текст сопадает с макетом, расстояние между элементами меню одинаковое, 30px.
        - элементы меню работают как якоря.
        - элементы меню интерактивные.
        - расстояние от самого меню до иконки пользователя - 40px, иконка является отдельным элементом, и не входит в <nav>.
        - текст "Brooklyn Public Library" находится в <h1>.
    * секция Welcome +4.
    * секция About +6:
        - все картинки добавлены.
        - расстояния между кнопками пагинации 10px.
        - у кнопок есть область интерактивности.
    * секция Favorites +8:
        - интерактивные кнопки дожны иметь структуру input type="radio" + label.
        - есть область интерактивности у фильтров.
        - все карточки добавлены в проект, скрыты необхоимые.
        - кнопки "buy" должны интерактивные.
        - кнопка "own" не интерактивная, и на ней должен присутствовать атрибут disabled.
    * секция CoffeShop +6.
    * секция Contacts +6:
        - карта вставлена картинкой.
        - телефонные номера сделаны ссылками, в виде "tel" и номера.
        - имя контактного лица сделано ссылкой, в виде "mailto" и адреса почты.
    * секция LibraryCard +8:
        - "Find your Library card" сделано в виде формы с input.
        - сделано ограничение на ввод определенных символов в input.
        - кнопки сделаны интерактивными.
        - иконки из модального окна добавлены в проект.
    * блок <footer> +8:
        - адрес библиотеки сделан ссылкой.
        - иконки соцсетей сделаны ссылками.
        - вместо Username написано имя.
        
*Общие требования к верстке +20:
    для построения сетки используются флексы или гриды +2.
    при уменьшении масштаба страницы браузера вся вёрстка (контент и фоны) размещается по центру, а не сдвигается в сторону +2.
    иконки добавлены в формате .svg +2.
    изображения добавлены в формате .jpg (.jpeg) или .png +2.
    есть favicon +2.
    плавная прокрутка по якорям +2.
    в футере название ссылки Username заменено и ведет на GitHub студента +2.
    в футере ссылка The Rolling Scopes School ведет на страницу курса https://rs.school/js-stage0/ +2.
    интерактивность элементов согласно макету +2.
    обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияет на соседние элементы +2.
`);