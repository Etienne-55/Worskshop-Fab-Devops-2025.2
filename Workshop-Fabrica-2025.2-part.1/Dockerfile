FROM python:3.8-slim
WORKDIR /app
COPY requirements.txt .
RUN apt-get update && apt-get install -y --no-install-recommends openssl && rm -rf /var/lib/apt/lists/*
RUN mkdir -p /app/ssl && \
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /app/ssl/server.key \
    -out /app/ssl/server.crt \
    -subj "/C=US/ST=State/L=City/O=MyOrg/OU=IT/CN=localhost" && \
    chmod 600 /app/ssl/server.key && \
    chmod 644 /app/ssl/server.crt
RUN pip install --no-cache -r requirements.txt
COPY . .
CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000" ]
