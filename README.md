# Введение/Introduction

Это проект телеграм бота, который позволит людям обмениться рекомендациями по просмотру различных произведений. В первую очередь предполагется реализовать возможность устраивать анимерулетку с использованием трех сервисов (mal, anilist, shikimori).

This is a telegram bot that allow people to exchange recommendations for viewing various media. First of all, it is planned to implement the functionality to organize anime roulette using three most popular services (mal, anilist, shikimori).

# Разработка/Development

На данный момент проект закончен на 30%. Завершены модули работы с бд и клиентом телеграма, а также сцены регистрации и добавления.

At the moment the project is 30% complete. The modules for working with the database (also models and dto), telegram client (updates), registration and recomendation adding are completed.

# Используемые технологии/Built with

1. Typescript
2. Nestjs (backend framework)
3. Nestjs-telegraf (telegram bot development for nestjs)
4. PostgreSQL
5. Sequelize

# Важно/Important

Для работы бота необходимо получить bot-token у BotFather в телеграм (TG_TOKEN в переменных окружения).
Для работы с api MAL необходимо получить MAL Client ID (MAL_TOKEN в переменных окружения) (гайд https://myanimelist.net/blog.php?eid=835707)

For the telegram-bot, you need to get a bot-token from BotFather in telegram (TG_TOKEN in environment variables).
To work with the MAL API, you need to get the MAL Client ID (MAL_TOKEN in the environment variables) (guide https://myanimelist.net/blog.php?eid=835707)


