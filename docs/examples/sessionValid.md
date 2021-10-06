# Пример использования методов `.sessionValid()`

- [Зачем нужен?](#зачем-нужен)
- [Как использовать?](#как-использовать)
- [Назад к методам](../guide.md#sessionvalid)

## Зачем нужен?

Этот метод проверяет валидность сессии через API "Сетевой город. Образование".

## Как использовать?

Представьте, что мы пишем бота, который позволяет вам взаимодействовать с сетевым. Однако мы решили сами следить за сессией, и нам нужно как-то ее проверить.

Для этого нам нужно будет импортировать класс `Safe`, так как по умолчанию этот метод воссоздает сеанс.

```typescript
import { Safe as NS } from "netschoolapi";

const user = new NS({
  origin: "https://example.com",
  login: "Иванов",
  password: "123456",
  school: "МБОУ ...", // Название школы (полностью) или её id
});

(async function () {
  // Проверяем сессию
  const valid = await user.sessionValid();

  if (valid) console.log("Сессия открыта");
  else console.log("Сессия уже недействительна");
})();
```