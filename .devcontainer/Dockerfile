# Use a base image with common tools installed
FROM mcr.microsoft.com/vscode/devcontainers/base:ubuntu-22.04

# Install Node.js and npm
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g npm@latest && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Python
RUN apt-get update && apt-get install -y \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Prettier, Black, and Yarn
RUN npm install --global prettier && \
    npm install --global yarn && \
    npm upgrade --global yarn

# Set the default shell
CMD [ "bash" ]
