from os import environ as env

from azure.monitor.opentelemetry import configure_azure_monitor
from opentelemetry.instrumentation.aiohttp_client import AioHttpClientInstrumentor
from opentelemetry.instrumentation.httpx import HTTPXClientInstrumentor

# Version
VERSION = env.get("VERSION", "0.0.0-unknown")

# Azure Application Insights
APPINSIGHTS_CONNECTION_STRING = env.get("APPLICATIONINSIGHTS_CONNECTION_STRING", None)
if not APPINSIGHTS_CONNECTION_STRING:
    raise ValueError("APPLICATIONINSIGHTS_CONNECTION_STRING is not set")

# OpenTelemetry
configure_azure_monitor()  # Configure Azure Application Insights exporter
AioHttpClientInstrumentor().instrument()  # Instrument aiohttp
HTTPXClientInstrumentor().instrument()  # Instrument httpx
