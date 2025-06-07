'use client'
import { useRouter } from 'next/navigation';
import styles from './style.module.scss'
const Index = () => {
    const router = useRouter()
    return (
        <div className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.left}>
                        <div className={styles.logo}>
                            <div className={styles.img}/>
                            <span>Оптовый поставщик <br/>нерудных материалов</span>
                        </div>
                        <span className={styles.copy}>©Все права защищены 2025</span>
                        <a href="">Политика конфиденциальности</a>
                    </div>
                    <div className={styles.center}>
                        <div className={styles.nav}>
                            <ul>
                                <li><span>Навигация</span></li>
                                <li onClick={()=>{router.push('/company')}}>О компании</li>
                                <li onClick={()=>{router.push('/cases')}}>Наши работы</li>
                                <li onClick={()=>{router.push('/services')}}>Услуги</li>
                                <li onClick={()=>{router.push('/contacts')}}>Контакты</li>
                            </ul>
                            <ul>
                                <li><span>Каталог</span></li>
                                <li onClick={()=>{router.push('/catalog/sand')}}>Песок</li>
                                <li onClick={()=>{router.push('/catalog/rubble')}}>Щебень</li>
                                <li onClick={()=>{router.push('/catalog/mixtures')}}>Смесь</li>
                            </ul>
                            <ul>
                                <li><span>Услуги</span></li>
                                <li onClick={()=>{router.push('/services')}}>Перевозка нерудных <br/>материалов</li>
                                <li onClick={()=>{router.push('/services')}}>Вывоз грунта</li>
                                <li onClick={()=>{router.push('/services')}}>Земляные работы</li>
                                <li className={styles.all} onClick={()=>{router.push('/services')}}>Все услуги</li>
                            </ul>
                        </div>
                        <div className={styles.search}>
                            <div className={styles.ico}/>
                            <input type="text" placeholder='Поиск по каталогу' />
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.links}>
                            <span>Отдел продаж:</span>
                            <a href="mailto:info@tkspectr.ru">info@tkspectr.ru</a>
                            <a href="tel:+84951478226,1">8 (495) 147 82 26</a>
                        </div>
                        {/* <div className={styles.links}>
                            <span>Отдел логистики:</span>
                            <a href="tel:84951478226,2">8(495)147-82-26</a>
                        </div> */}
                        <div className={styles.links}>
                            <span>Мессенджеры:</span>
                            <a href="https://wa.me/79916449781?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5." target='_blank'>WhatsApp</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
