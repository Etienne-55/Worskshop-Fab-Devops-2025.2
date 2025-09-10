FROM instrumentisto/flutter:latest AS builder

WORKDIR /app

COPY . .

RUN flutter pub get
RUN flutter build web --release


# FROM nginx:alpine
# COPY --from=builder /app/build/web /usr/share/nginx/html/
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]


# EXPOSE 8080
# CMD ["flutter", "run", "-d", "web-server", "--web-port", "8080", "--web-hostname", "0.0.0.0", "--release"]


FROM python:3.9-slim AS runner

WORKDIR /app

COPY --from=builder /app/build/web/ /app/

EXPOSE 8080

CMD ["python", "-m", "http.server", "8080", "--bind", "0.0.0.0"]
