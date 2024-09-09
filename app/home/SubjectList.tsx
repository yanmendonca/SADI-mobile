import { SubjectList as SubjectListScreen } from "../../screens/prepare/SubjectList";

export const SubjectList: React.FC = () => {
    return <SubjectListScreen 
                areaName="CIÊNCIAS DA NATUREZA E SUAS TECNOLOGIAS" 
                subjects={
                    [
                        {name: "Física", done: true, totalMinutes: 120, image: require("@/assets/images/focus.jpg")},
                        {name: "Química", done: false, totalMinutes: 120, image: require("@/assets/images/focus.jpg")},
                        {name: "Biologia", done: false, totalMinutes: 120, image: require("@/assets/images/focus.jpg")}
                    ]
                }>
            </SubjectListScreen>
}

export default SubjectList;