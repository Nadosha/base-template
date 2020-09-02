/**
 * Created by andrey on 13.11.2018.
 */
Template.services.helpers({
    'services': function() {
        "use strict";

        let firstBlock = [
            'организационной, финансовой и юридических структур',
            'систем бюджетирования (план-факторный анализ)',
            'стратегического целеполагания в системе бюджетирования',
            'системы анализа инвестиционных проектов',
            'функционала Финансово Экономической Службы',
            'IT-систем учета и отчетности'
        ];

        let secondBlock = [
            'аудит и моделирование ответов на вопросы об источнике происхождения капитала',
            'аудит и структурирование бизнес и личных активов',
            'моделирование личного налогообложения',
            'сопровождение формирования инвестиционных активов'
        ];

        let pack = {
            'firstBlock': firstBlock,
            'secondBlock': secondBlock
        }

        return pack;
    }
});