from os import environ as env

from scrape_it_now import __version__

# Version
VERSION = env.get("VERSION", __version__)

# Azure Application Insights
APPINSIGHTS_CONNECTION_STRING = env.get("APPLICATIONINSIGHTS_CONNECTION_STRING", None)

if (
    not APPINSIGHTS_CONNECTION_STRING
):  # We don't raise an error, that feature must be optional
    print(  # noqa: T201
        "Azure Application Insights monitoring is disabled, set APPLICATIONINSIGHTS_CONNECTION_STRING to enable."
    )

else:  # Setup OpenTelemetry
    from azure.monitor.opentelemetry import configure_azure_monitor
    from opentelemetry.instrumentation.aiohttp_client import AioHttpClientInstrumentor
    from opentelemetry.instrumentation.httpx import HTTPXClientInstrumentor

    configure_azure_monitor()  # Configure Azure Application Insights exporter
    AioHttpClientInstrumentor().instrument()  # Instrument aiohttp
    HTTPXClientInstrumentor().instrument()  # Instrument httpx
