Azure SDK for Python
2.0.0
Return to Index
Package version
12.23.0b112.22.012.21.012.21.0b112.20.012.20.0b112.19.112.19.012.19.0b112.18.312.18.212.18.112.18.012.18.0b112.17.012.17.0b112.16.012.16.0b112.15.012.15.0b112.14.112.14.012.14.0b212.14.0b112.13.112.13.012.13.0b112.12.012.12.0b112.11.012.10.012.10.0b412.10.0b312.10.0b212.10.0b112.9.012.9.0b112.8.112.8.012.8.0b112.7.112.7.012.7.0b112.6.012.6.0b112.5.012.4.012.4.0b112.3.212.3.112.3.012.2.012.1.012.0.012.0.0b5
Developer Documentation
* azure.storage.blob package
* `PartialBatchErrorException`
* `PartialBatchErrorException.add_note()`
* `PartialBatchErrorException.raise_with_traceback()`
* `PartialBatchErrorException.with_traceback()`
* `PartialBatchErrorException.args`
* `AccessPolicy`
* `AccessPolicy.as_dict()`
* `AccessPolicy.deserialize()`
* `AccessPolicy.enable_additional_properties_sending()`
* `AccessPolicy.from_dict()`
* `AccessPolicy.is_xml_model()`
* `AccessPolicy.serialize()`
* `AccessPolicy.expiry`
* `AccessPolicy.permission`
* `AccessPolicy.start`
* `AccountSasPermissions`
* `AccountSasPermissions.from_string()`
* `AccountSasPermissions.add`
* `AccountSasPermissions.create`
* `AccountSasPermissions.delete`
* `AccountSasPermissions.delete_previous_version`
* `AccountSasPermissions.filter_by_tags`
* `AccountSasPermissions.list`
* `AccountSasPermissions.permanent_delete`
* `AccountSasPermissions.process`
* `AccountSasPermissions.read`
* `AccountSasPermissions.set_immutability_policy`
* `AccountSasPermissions.tag`
* `AccountSasPermissions.update`
* `AccountSasPermissions.write`
* `ArrowDialect`
* `ArrowDialect.as_dict()`
* `ArrowDialect.deserialize()`
* `ArrowDialect.enable_additional_properties_sending()`
* `ArrowDialect.from_dict()`
* `ArrowDialect.is_xml_model()`
* `ArrowDialect.serialize()`
* `ArrowType`
* `ArrowType.capitalize()`
* `ArrowType.casefold()`
* `ArrowType.center()`
* `ArrowType.count()`
* `ArrowType.encode()`
* `ArrowType.endswith()`
* `ArrowType.expandtabs()`
* `ArrowType.find()`
* `ArrowType.format()`
* `ArrowType.format_map()`
* `ArrowType.index()`
* `ArrowType.isalnum()`
* `ArrowType.isalpha()`
* `ArrowType.isascii()`
* `ArrowType.isdecimal()`
* `ArrowType.isdigit()`
* `ArrowType.isidentifier()`
* `ArrowType.islower()`
* `ArrowType.isnumeric()`
* `ArrowType.isprintable()`
* `ArrowType.isspace()`
* `ArrowType.istitle()`
* `ArrowType.isupper()`
* `ArrowType.join()`
* `ArrowType.ljust()`
* `ArrowType.lower()`
* `ArrowType.lstrip()`
* `ArrowType.maketrans()`
* `ArrowType.partition()`
* `ArrowType.removeprefix()`
* `ArrowType.removesuffix()`
* `ArrowType.replace()`
* `ArrowType.rfind()`
* `ArrowType.rindex()`
* `ArrowType.rjust()`
* `ArrowType.rpartition()`
* `ArrowType.rsplit()`
* `ArrowType.rstrip()`
* `ArrowType.split()`
* `ArrowType.splitlines()`
* `ArrowType.startswith()`
* `ArrowType.strip()`
* `ArrowType.swapcase()`
* `ArrowType.title()`
* `ArrowType.translate()`
* `ArrowType.upper()`
* `ArrowType.zfill()`
* `ArrowType.BOOL`
* `ArrowType.DECIMAL`
* `ArrowType.DOUBLE`
* `ArrowType.INT64`
* `ArrowType.STRING`
* `ArrowType.TIMESTAMP_MS`
* `BlobAnalyticsLogging`
* `BlobAnalyticsLogging.as_dict()`
* `BlobAnalyticsLogging.deserialize()`
* `BlobAnalyticsLogging.enable_additional_properties_sending()`
* `BlobAnalyticsLogging.from_dict()`
* `BlobAnalyticsLogging.is_xml_model()`
* `BlobAnalyticsLogging.serialize()`
* `BlobAnalyticsLogging.delete`
* `BlobAnalyticsLogging.read`
* `BlobAnalyticsLogging.retention_policy`
* `BlobAnalyticsLogging.version`
* `BlobAnalyticsLogging.write`
* `BlobBlock`
* `BlobBlock.get()`
* `BlobBlock.has_key()`
* `BlobBlock.items()`
* `BlobBlock.keys()`
* `BlobBlock.update()`
* `BlobBlock.values()`
* `BlobBlock.block_id`
* `BlobBlock.size`
* `BlobBlock.state`
* `BlobClient`
* `BlobClient.abort_copy()`
* `BlobClient.acquire_lease()`
* `BlobClient.append_block()`
* `BlobClient.append_block_from_url()`
* `BlobClient.clear_page()`
* `BlobClient.close()`
* `BlobClient.commit_block_list()`
* `BlobClient.create_append_blob()`
* `BlobClient.create_page_blob()`
* `BlobClient.create_snapshot()`
* `BlobClient.delete_blob()`
* `BlobClient.delete_immutability_policy()`
* `BlobClient.download_blob()`
* `BlobClient.exists()`
* `BlobClient.from_blob_url()`
* `BlobClient.from_connection_string()`
* `BlobClient.get_account_information()`
* `BlobClient.get_blob_properties()`
* `BlobClient.get_blob_tags()`
* `BlobClient.get_block_list()`
* `BlobClient.get_page_range_diff_for_managed_disk()`
* `BlobClient.get_page_ranges()`
* `BlobClient.list_page_ranges()`
* `BlobClient.query_blob()`
* `BlobClient.resize_blob()`
* `BlobClient.seal_append_blob()`
* `BlobClient.set_blob_metadata()`
* `BlobClient.set_blob_tags()`
* `BlobClient.set_http_headers()`
* `BlobClient.set_immutability_policy()`
* `BlobClient.set_legal_hold()`
* `BlobClient.set_premium_page_blob_tier()`
* `BlobClient.set_sequence_number()`
* `BlobClient.set_standard_blob_tier()`
* `BlobClient.stage_block()`
* `BlobClient.stage_block_from_url()`
* `BlobClient.start_copy_from_url()`
* `BlobClient.undelete_blob()`
* `BlobClient.upload_blob()`
* `BlobClient.upload_blob_from_url()`
* `BlobClient.upload_page()`
* `BlobClient.upload_pages_from_url()`
* `BlobClient.api_version`
* `BlobClient.location_mode`
* `BlobClient.primary_endpoint`
* `BlobClient.primary_hostname`
* `BlobClient.secondary_endpoint`
* `BlobClient.secondary_hostname`
* `BlobClient.url`
* `BlobImmutabilityPolicyMode`
* `BlobImmutabilityPolicyMode.capitalize()`
* `BlobImmutabilityPolicyMode.casefold()`
* `BlobImmutabilityPolicyMode.center()`
* `BlobImmutabilityPolicyMode.count()`
* `BlobImmutabilityPolicyMode.encode()`
* `BlobImmutabilityPolicyMode.endswith()`
* `BlobImmutabilityPolicyMode.expandtabs()`
* `BlobImmutabilityPolicyMode.find()`
* `BlobImmutabilityPolicyMode.format()`
* `BlobImmutabilityPolicyMode.format_map()`
* `BlobImmutabilityPolicyMode.index()`
* `BlobImmutabilityPolicyMode.isalnum()`
* `BlobImmutabilityPolicyMode.isalpha()`
* `BlobImmutabilityPolicyMode.isascii()`
* `BlobImmutabilityPolicyMode.isdecimal()`
* `BlobImmutabilityPolicyMode.isdigit()`
* `BlobImmutabilityPolicyMode.isidentifier()`
* `BlobImmutabilityPolicyMode.islower()`
* `BlobImmutabilityPolicyMode.isnumeric()`
* `BlobImmutabilityPolicyMode.isprintable()`
* `BlobImmutabilityPolicyMode.isspace()`
* `BlobImmutabilityPolicyMode.istitle()`
* `BlobImmutabilityPolicyMode.isupper()`
* `BlobImmutabilityPolicyMode.join()`
* `BlobImmutabilityPolicyMode.ljust()`
* `BlobImmutabilityPolicyMode.lower()`
* `BlobImmutabilityPolicyMode.lstrip()`
* `BlobImmutabilityPolicyMode.maketrans()`
* `BlobImmutabilityPolicyMode.partition()`
* `BlobImmutabilityPolicyMode.removeprefix()`
* `BlobImmutabilityPolicyMode.removesuffix()`
* `BlobImmutabilityPolicyMode.replace()`
* `BlobImmutabilityPolicyMode.rfind()`
* `BlobImmutabilityPolicyMode.rindex()`
* `BlobImmutabilityPolicyMode.rjust()`
* `BlobImmutabilityPolicyMode.rpartition()`
* `BlobImmutabilityPolicyMode.rsplit()`
* `BlobImmutabilityPolicyMode.rstrip()`
* `BlobImmutabilityPolicyMode.split()`
* `BlobImmutabilityPolicyMode.splitlines()`
* `BlobImmutabilityPolicyMode.startswith()`
* `BlobImmutabilityPolicyMode.strip()`
* `BlobImmutabilityPolicyMode.swapcase()`
* `BlobImmutabilityPolicyMode.title()`
* `BlobImmutabilityPolicyMode.translate()`
* `BlobImmutabilityPolicyMode.upper()`
* `BlobImmutabilityPolicyMode.zfill()`
* `BlobImmutabilityPolicyMode.LOCKED`
* `BlobImmutabilityPolicyMode.MUTABLE`
* `BlobImmutabilityPolicyMode.UNLOCKED`
* `BlobLeaseClient`
* `BlobLeaseClient.acquire()`
* `BlobLeaseClient.break_lease()`
* `BlobLeaseClient.change()`
* `BlobLeaseClient.release()`
* `BlobLeaseClient.renew()`
* `BlobLeaseClient.etag`
* `BlobLeaseClient.id`
* `BlobLeaseClient.last_modified`
* `BlobPrefix`
* `BlobPrefix.by_page()`
* `BlobPrefix.get()`
* `BlobPrefix.has_key()`
* `BlobPrefix.items()`
* `BlobPrefix.keys()`
* `BlobPrefix.next()`
* `BlobPrefix.update()`
* `BlobPrefix.values()`
* `BlobPrefix.command`
* `BlobPrefix.container`
* `BlobPrefix.current_page`
* `BlobPrefix.delimiter`
* `BlobPrefix.location_mode`
* `BlobPrefix.marker`
* `BlobPrefix.name`
* `BlobPrefix.next_marker`
* `BlobPrefix.prefix`
* `BlobPrefix.results_per_page`
* `BlobPrefix.service_endpoint`
* `BlobProperties`
* `BlobProperties.get()`
* `BlobProperties.has_key()`
* `BlobProperties.items()`
* `BlobProperties.keys()`
* `BlobProperties.update()`
* `BlobProperties.values()`
* `BlobProperties.append_blob_committed_block_count`
* `BlobProperties.archive_status`
* `BlobProperties.blob_tier`
* `BlobProperties.blob_tier_change_time`
* `BlobProperties.blob_tier_inferred`
* `BlobProperties.blob_type`
* `BlobProperties.container`
* `BlobProperties.content_range`
* `BlobProperties.content_settings`
* `BlobProperties.copy`
* `BlobProperties.creation_time`
* `BlobProperties.deleted`
* `BlobProperties.deleted_time`
* `BlobProperties.encryption_key_sha256`
* `BlobProperties.encryption_scope`
* `BlobProperties.etag`
* `BlobProperties.has_legal_hold`
* `BlobProperties.has_versions_only`
* `BlobProperties.immutability_policy`
* `BlobProperties.is_append_blob_sealed`
* `BlobProperties.last_accessed_on`
* `BlobProperties.last_modified`
* `BlobProperties.lease`
* `BlobProperties.metadata`
* `BlobProperties.name`
* `BlobProperties.object_replication_destination_policy`
* `BlobProperties.object_replication_source_properties`
* `BlobProperties.page_blob_sequence_number`
* `BlobProperties.rehydrate_priority`
* `BlobProperties.remaining_retention_days`
* `BlobProperties.request_server_encrypted`
* `BlobProperties.server_encrypted`
* `BlobProperties.size`
* `BlobProperties.snapshot`
* `BlobProperties.tag_count`
* `BlobProperties.tags`
* `BlobQueryError`
* `BlobQueryError.description`
* `BlobQueryError.error`
* `BlobQueryError.is_fatal`
* `BlobQueryError.position`
* `BlobQueryReader`
* `BlobQueryReader.readall()`
* `BlobQueryReader.readinto()`
* `BlobQueryReader.records()`
* `BlobQueryReader.container`
* `BlobQueryReader.name`
* `BlobQueryReader.record_delimiter`
* `BlobQueryReader.response_headers`
* `BlobSasPermissions`
* `BlobSasPermissions.from_string()`
* `BlobSasPermissions.add`
* `BlobSasPermissions.create`
* `BlobSasPermissions.delete`
* `BlobSasPermissions.delete_previous_version`
* `BlobSasPermissions.execute`
* `BlobSasPermissions.move`
* `BlobSasPermissions.permanent_delete`
* `BlobSasPermissions.read`
* `BlobSasPermissions.set_immutability_policy`
* `BlobSasPermissions.tag`
* `BlobSasPermissions.write`
* `BlobServiceClient`
* `BlobServiceClient.close()`
* `BlobServiceClient.create_container()`
* `BlobServiceClient.delete_container()`
* `BlobServiceClient.find_blobs_by_tags()`
* `BlobServiceClient.from_connection_string()`
* `BlobServiceClient.get_account_information()`
* `BlobServiceClient.get_blob_client()`
* `BlobServiceClient.get_container_client()`
* `BlobServiceClient.get_service_properties()`
* `BlobServiceClient.get_service_stats()`
* `BlobServiceClient.get_user_delegation_key()`
* `BlobServiceClient.list_containers()`
* `BlobServiceClient.set_service_properties()`
* `BlobServiceClient.undelete_container()`
* `BlobServiceClient.api_version`
* `BlobServiceClient.location_mode`
* `BlobServiceClient.primary_endpoint`
* `BlobServiceClient.primary_hostname`
* `BlobServiceClient.secondary_endpoint`
* `BlobServiceClient.secondary_hostname`
* `BlobServiceClient.url`
* `BlobType`
* `BlobType.capitalize()`
* `BlobType.casefold()`
* `BlobType.center()`
* `BlobType.count()`
* `BlobType.encode()`
* `BlobType.endswith()`
* `BlobType.expandtabs()`
* `BlobType.find()`
* `BlobType.format()`
* `BlobType.format_map()`
* `BlobType.index()`
* `BlobType.isalnum()`
* `BlobType.isalpha()`
* `BlobType.isascii()`
* `BlobType.isdecimal()`
* `BlobType.isdigit()`
* `BlobType.isidentifier()`
* `BlobType.islower()`
* `BlobType.isnumeric()`
* `BlobType.isprintable()`
* `BlobType.isspace()`
* `BlobType.istitle()`
* `BlobType.isupper()`
* `BlobType.join()`
* `BlobType.ljust()`
* `BlobType.lower()`
* `BlobType.lstrip()`
* `BlobType.maketrans()`
* `BlobType.partition()`
* `BlobType.removeprefix()`
* `BlobType.removesuffix()`
* `BlobType.replace()`
* `BlobType.rfind()`
* `BlobType.rindex()`
* `BlobType.rjust()`
* `BlobType.rpartition()`
* `BlobType.rsplit()`
* `BlobType.rstrip()`
* `BlobType.split()`
* `BlobType.splitlines()`
* `BlobType.startswith()`
* `BlobType.strip()`
* `BlobType.swapcase()`
* `BlobType.title()`
* `BlobType.translate()`
* `BlobType.upper()`
* `BlobType.zfill()`
* `BlobType.APPENDBLOB`
* `BlobType.BLOCKBLOB`
* `BlobType.PAGEBLOB`
* `BlockState`
* `BlockState.capitalize()`
* `BlockState.casefold()`
* `BlockState.center()`
* `BlockState.count()`
* `BlockState.encode()`
* `BlockState.endswith()`
* `BlockState.expandtabs()`
* `BlockState.find()`
* `BlockState.format()`
* `BlockState.format_map()`
* `BlockState.index()`
* `BlockState.isalnum()`
* `BlockState.isalpha()`
* `BlockState.isascii()`
* `BlockState.isdecimal()`
* `BlockState.isdigit()`
* `BlockState.isidentifier()`
* `BlockState.islower()`
* `BlockState.isnumeric()`
* `BlockState.isprintable()`
* `BlockState.isspace()`
* `BlockState.istitle()`
* `BlockState.isupper()`
* `BlockState.join()`
* `BlockState.ljust()`
* `BlockState.lower()`
* `BlockState.lstrip()`
* `BlockState.maketrans()`
* `BlockState.partition()`
* `BlockState.removeprefix()`
* `BlockState.removesuffix()`
* `BlockState.replace()`
* `BlockState.rfind()`
* `BlockState.rindex()`
* `BlockState.rjust()`
* `BlockState.rpartition()`
* `BlockState.rsplit()`
* `BlockState.rstrip()`
* `BlockState.split()`
* `BlockState.splitlines()`
* `BlockState.startswith()`
* `BlockState.strip()`
* `BlockState.swapcase()`
* `BlockState.title()`
* `BlockState.translate()`
* `BlockState.upper()`
* `BlockState.zfill()`
* `BlockState.COMMITTED`
* `BlockState.LATEST`
* `BlockState.UNCOMMITTED`
* `ContainerClient`
* `ContainerClient.acquire_lease()`
* `ContainerClient.close()`
* `ContainerClient.create_container()`
* `ContainerClient.delete_blob()`
* `ContainerClient.delete_blobs()`
* `ContainerClient.delete_container()`
* `ContainerClient.download_blob()`
* `ContainerClient.exists()`
* `ContainerClient.find_blobs_by_tags()`
* `ContainerClient.from_connection_string()`
* `ContainerClient.from_container_url()`
* `ContainerClient.get_account_information()`
* `ContainerClient.get_blob_client()`
* `ContainerClient.get_container_access_policy()`
* `ContainerClient.get_container_properties()`
* `ContainerClient.list_blob_names()`
* `ContainerClient.list_blobs()`
* `ContainerClient.set_container_access_policy()`
* `ContainerClient.set_container_metadata()`
* `ContainerClient.set_premium_page_blob_tier_blobs()`
* `ContainerClient.set_standard_blob_tier_blobs()`
* `ContainerClient.upload_blob()`
* `ContainerClient.walk_blobs()`
* `ContainerClient.api_version`
* `ContainerClient.location_mode`
* `ContainerClient.primary_endpoint`
* `ContainerClient.primary_hostname`
* `ContainerClient.secondary_endpoint`
* `ContainerClient.secondary_hostname`
* `ContainerClient.url`
* `ContainerEncryptionScope`
* `ContainerEncryptionScope.default_encryption_scope`
* `ContainerEncryptionScope.prevent_encryption_scope_override`
* `ContainerProperties`
* `ContainerProperties.get()`
* `ContainerProperties.has_key()`
* `ContainerProperties.items()`
* `ContainerProperties.keys()`
* `ContainerProperties.update()`
* `ContainerProperties.values()`
* `ContainerProperties.deleted`
* `ContainerProperties.encryption_scope`
* `ContainerProperties.etag`
* `ContainerProperties.has_immutability_policy`
* `ContainerProperties.has_legal_hold`
* `ContainerProperties.immutable_storage_with_versioning_enabled`
* `ContainerProperties.last_modified`
* `ContainerProperties.lease`
* `ContainerProperties.metadata`
* `ContainerProperties.name`
* `ContainerProperties.public_access`
* `ContainerProperties.version`
* `ContainerSasPermissions`
* `ContainerSasPermissions.from_string()`
* `ContainerSasPermissions.add`
* `ContainerSasPermissions.create`
* `ContainerSasPermissions.delete`
* `ContainerSasPermissions.delete_previous_version`
* `ContainerSasPermissions.execute`
* `ContainerSasPermissions.list`
* `ContainerSasPermissions.move`
* `ContainerSasPermissions.permanent_delete`
* `ContainerSasPermissions.read`
* `ContainerSasPermissions.set_immutability_policy`
* `ContainerSasPermissions.tag`
* `ContainerSasPermissions.write`
* `ContentSettings`
* `ContentSettings.get()`
* `ContentSettings.has_key()`
* `ContentSettings.items()`
* `ContentSettings.keys()`
* `ContentSettings.update()`
* `ContentSettings.values()`
* `ContentSettings.cache_control`
* `ContentSettings.content_disposition`
* `ContentSettings.content_encoding`
* `ContentSettings.content_language`
* `ContentSettings.content_md5`
* `ContentSettings.content_type`
* `CopyProperties`
* `CopyProperties.get()`
* `CopyProperties.has_key()`
* `CopyProperties.items()`
* `CopyProperties.keys()`
* `CopyProperties.update()`
* `CopyProperties.values()`
* `CopyProperties.completion_time`
* `CopyProperties.destination_snapshot`
* `CopyProperties.id`
* `CopyProperties.incremental_copy`
* `CopyProperties.progress`
* `CopyProperties.source`
* `CopyProperties.status`
* `CopyProperties.status_description`
* `CorsRule`
* `CorsRule.as_dict()`
* `CorsRule.deserialize()`
* `CorsRule.enable_additional_properties_sending()`
* `CorsRule.from_dict()`
* `CorsRule.is_xml_model()`
* `CorsRule.serialize()`
* `CorsRule.allowed_headers`
* `CorsRule.allowed_methods`
* `CorsRule.allowed_origins`
* `CorsRule.exposed_headers`
* `CorsRule.max_age_in_seconds`
* `CustomerProvidedEncryptionKey`
* `CustomerProvidedEncryptionKey.algorithm`
* `CustomerProvidedEncryptionKey.key_hash`
* `CustomerProvidedEncryptionKey.key_value`
* `DelimitedJsonDialect`
* `DelimitedJsonDialect.get()`
* `DelimitedJsonDialect.has_key()`
* `DelimitedJsonDialect.items()`
* `DelimitedJsonDialect.keys()`
* `DelimitedJsonDialect.update()`
* `DelimitedJsonDialect.values()`
* `DelimitedTextDialect`
* `DelimitedTextDialect.get()`
* `DelimitedTextDialect.has_key()`
* `DelimitedTextDialect.items()`
* `DelimitedTextDialect.keys()`
* `DelimitedTextDialect.update()`
* `DelimitedTextDialect.values()`
* `ExponentialRetry`
* `ExponentialRetry.configure_retries()`
* `ExponentialRetry.get_backoff_time()`
* `ExponentialRetry.increment()`
* `ExponentialRetry.send()`
* `ExponentialRetry.sleep()`
* `ExponentialRetry.connect_retries`
* `ExponentialRetry.increment_base`
* `ExponentialRetry.initial_backoff`
* `ExponentialRetry.next`
* `ExponentialRetry.random_jitter_range`
* `ExponentialRetry.retry_read`
* `ExponentialRetry.retry_status`
* `ExponentialRetry.retry_to_secondary`
* `ExponentialRetry.total_retries`
* `FilteredBlob`
* `FilteredBlob.get()`
* `FilteredBlob.has_key()`
* `FilteredBlob.items()`
* `FilteredBlob.keys()`
* `FilteredBlob.update()`
* `FilteredBlob.values()`
* `FilteredBlob.container_name`
* `FilteredBlob.name`
* `FilteredBlob.tags`
* `ImmutabilityPolicy`
* `ImmutabilityPolicy.get()`
* `ImmutabilityPolicy.has_key()`
* `ImmutabilityPolicy.items()`
* `ImmutabilityPolicy.keys()`
* `ImmutabilityPolicy.update()`
* `ImmutabilityPolicy.values()`
* `ImmutabilityPolicy.expiry_time`
* `ImmutabilityPolicy.policy_mode`
* `LeaseProperties`
* `LeaseProperties.get()`
* `LeaseProperties.has_key()`
* `LeaseProperties.items()`
* `LeaseProperties.keys()`
* `LeaseProperties.update()`
* `LeaseProperties.values()`
* `LeaseProperties.duration`
* `LeaseProperties.state`
* `LeaseProperties.status`
* `LinearRetry`
* `LinearRetry.configure_retries()`
* `LinearRetry.get_backoff_time()`
* `LinearRetry.increment()`
* `LinearRetry.send()`
* `LinearRetry.sleep()`
* `LinearRetry.connect_retries`
* `LinearRetry.initial_backoff`
* `LinearRetry.next`
* `LinearRetry.random_jitter_range`
* `LinearRetry.retry_read`
* `LinearRetry.retry_status`
* `LinearRetry.retry_to_secondary`
* `LinearRetry.total_retries`
* `LocationMode`
* `LocationMode.PRIMARY`
* `LocationMode.SECONDARY`
* `Metrics`
* `Metrics.as_dict()`
* `Metrics.deserialize()`
* `Metrics.enable_additional_properties_sending()`
* `Metrics.from_dict()`
* `Metrics.is_xml_model()`
* `Metrics.serialize()`
* `Metrics.enabled`
* `Metrics.include_apis`
* `Metrics.retention_policy`
* `Metrics.version`
* `ObjectReplicationPolicy`
* `ObjectReplicationPolicy.get()`
* `ObjectReplicationPolicy.has_key()`
* `ObjectReplicationPolicy.items()`
* `ObjectReplicationPolicy.keys()`
* `ObjectReplicationPolicy.update()`
* `ObjectReplicationPolicy.values()`
* `ObjectReplicationPolicy.policy_id`
* `ObjectReplicationPolicy.rules`
* `ObjectReplicationRule`
* `ObjectReplicationRule.get()`
* `ObjectReplicationRule.has_key()`
* `ObjectReplicationRule.items()`
* `ObjectReplicationRule.keys()`
* `ObjectReplicationRule.update()`
* `ObjectReplicationRule.values()`
* `ObjectReplicationRule.rule_id`
* `ObjectReplicationRule.status`
* `PageRange`
* `PageRange.get()`
* `PageRange.has_key()`
* `PageRange.items()`
* `PageRange.keys()`
* `PageRange.update()`
* `PageRange.values()`
* `PageRange.cleared`
* `PageRange.end`
* `PageRange.start`
* `PremiumPageBlobTier`
* `PremiumPageBlobTier.capitalize()`
* `PremiumPageBlobTier.casefold()`
* `PremiumPageBlobTier.center()`
* `PremiumPageBlobTier.count()`
* `PremiumPageBlobTier.encode()`
* `PremiumPageBlobTier.endswith()`
* `PremiumPageBlobTier.expandtabs()`
* `PremiumPageBlobTier.find()`
* `PremiumPageBlobTier.format()`
* `PremiumPageBlobTier.format_map()`
* `PremiumPageBlobTier.index()`
* `PremiumPageBlobTier.isalnum()`
* `PremiumPageBlobTier.isalpha()`
* `PremiumPageBlobTier.isascii()`
* `PremiumPageBlobTier.isdecimal()`
* `PremiumPageBlobTier.isdigit()`
* `PremiumPageBlobTier.isidentifier()`
* `PremiumPageBlobTier.islower()`
* `PremiumPageBlobTier.isnumeric()`
* `PremiumPageBlobTier.isprintable()`
* `PremiumPageBlobTier.isspace()`
* `PremiumPageBlobTier.istitle()`
* `PremiumPageBlobTier.isupper()`
* `PremiumPageBlobTier.join()`
* `PremiumPageBlobTier.ljust()`
* `PremiumPageBlobTier.lower()`
* `PremiumPageBlobTier.lstrip()`
* `PremiumPageBlobTier.maketrans()`
* `PremiumPageBlobTier.partition()`
* `PremiumPageBlobTier.removeprefix()`
* `PremiumPageBlobTier.removesuffix()`
* `PremiumPageBlobTier.replace()`
* `PremiumPageBlobTier.rfind()`
* `PremiumPageBlobTier.rindex()`
* `PremiumPageBlobTier.rjust()`
* `PremiumPageBlobTier.rpartition()`
* `PremiumPageBlobTier.rsplit()`
* `PremiumPageBlobTier.rstrip()`
* `PremiumPageBlobTier.split()`
* `PremiumPageBlobTier.splitlines()`
* `PremiumPageBlobTier.startswith()`
* `PremiumPageBlobTier.strip()`
* `PremiumPageBlobTier.swapcase()`
* `PremiumPageBlobTier.title()`
* `PremiumPageBlobTier.translate()`
* `PremiumPageBlobTier.upper()`
* `PremiumPageBlobTier.zfill()`
* `PremiumPageBlobTier.P10`
* `PremiumPageBlobTier.P15`
* `PremiumPageBlobTier.P20`
* `PremiumPageBlobTier.P30`
* `PremiumPageBlobTier.P4`
* `PremiumPageBlobTier.P40`
* `PremiumPageBlobTier.P50`
* `PremiumPageBlobTier.P6`
* `PremiumPageBlobTier.P60`
* `PublicAccess`
* `PublicAccess.capitalize()`
* `PublicAccess.casefold()`
* `PublicAccess.center()`
* `PublicAccess.count()`
* `PublicAccess.encode()`
* `PublicAccess.endswith()`
* `PublicAccess.expandtabs()`
* `PublicAccess.find()`
* `PublicAccess.format()`
* `PublicAccess.format_map()`
* `PublicAccess.index()`
* `PublicAccess.isalnum()`
* `PublicAccess.isalpha()`
* `PublicAccess.isascii()`
* `PublicAccess.isdecimal()`
* `PublicAccess.isdigit()`
* `PublicAccess.isidentifier()`
* `PublicAccess.islower()`
* `PublicAccess.isnumeric()`
* `PublicAccess.isprintable()`
* `PublicAccess.isspace()`
* `PublicAccess.istitle()`
* `PublicAccess.isupper()`
* `PublicAccess.join()`
* `PublicAccess.ljust()`
* `PublicAccess.lower()`
* `PublicAccess.lstrip()`
* `PublicAccess.maketrans()`
* `PublicAccess.partition()`
* `PublicAccess.removeprefix()`
* `PublicAccess.removesuffix()`
* `PublicAccess.replace()`
* `PublicAccess.rfind()`
* `PublicAccess.rindex()`
* `PublicAccess.rjust()`
* `PublicAccess.rpartition()`
* `PublicAccess.rsplit()`
* `PublicAccess.rstrip()`
* `PublicAccess.split()`
* `PublicAccess.splitlines()`
* `PublicAccess.startswith()`
* `PublicAccess.strip()`
* `PublicAccess.swapcase()`
* `PublicAccess.title()`
* `PublicAccess.translate()`
* `PublicAccess.upper()`
* `PublicAccess.zfill()`
* `PublicAccess.BLOB`
* `PublicAccess.CONTAINER`
* `PublicAccess.OFF`
* `QuickQueryDialect`
* `QuickQueryDialect.capitalize()`
* `QuickQueryDialect.casefold()`
* `QuickQueryDialect.center()`
* `QuickQueryDialect.count()`
* `QuickQueryDialect.encode()`
* `QuickQueryDialect.endswith()`
* `QuickQueryDialect.expandtabs()`
* `QuickQueryDialect.find()`
* `QuickQueryDialect.format()`
* `QuickQueryDialect.format_map()`
* `QuickQueryDialect.index()`
* `QuickQueryDialect.isalnum()`
* `QuickQueryDialect.isalpha()`
* `QuickQueryDialect.isascii()`
* `QuickQueryDialect.isdecimal()`
* `QuickQueryDialect.isdigit()`
* `QuickQueryDialect.isidentifier()`
* `QuickQueryDialect.islower()`
* `QuickQueryDialect.isnumeric()`
* `QuickQueryDialect.isprintable()`
* `QuickQueryDialect.isspace()`
* `QuickQueryDialect.istitle()`
* `QuickQueryDialect.isupper()`
* `QuickQueryDialect.join()`
* `QuickQueryDialect.ljust()`
* `QuickQueryDialect.lower()`
* `QuickQueryDialect.lstrip()`
* `QuickQueryDialect.maketrans()`
* `QuickQueryDialect.partition()`
* `QuickQueryDialect.removeprefix()`
* `QuickQueryDialect.removesuffix()`
* `QuickQueryDialect.replace()`
* `QuickQueryDialect.rfind()`
* `QuickQueryDialect.rindex()`
* `QuickQueryDialect.rjust()`
* `QuickQueryDialect.rpartition()`
* `QuickQueryDialect.rsplit()`
* `QuickQueryDialect.rstrip()`
* `QuickQueryDialect.split()`
* `QuickQueryDialect.splitlines()`
* `QuickQueryDialect.startswith()`
* `QuickQueryDialect.strip()`
* `QuickQueryDialect.swapcase()`
* `QuickQueryDialect.title()`
* `QuickQueryDialect.translate()`
* `QuickQueryDialect.upper()`
* `QuickQueryDialect.zfill()`
* `QuickQueryDialect.DELIMITEDJSON`
* `QuickQueryDialect.DELIMITEDTEXT`
* `QuickQueryDialect.PARQUET`
* `RehydratePriority`
* `RehydratePriority.capitalize()`
* `RehydratePriority.casefold()`
* `RehydratePriority.center()`
* `RehydratePriority.count()`
* `RehydratePriority.encode()`
* `RehydratePriority.endswith()`
* `RehydratePriority.expandtabs()`
* `RehydratePriority.find()`
* `RehydratePriority.format()`
* `RehydratePriority.format_map()`
* `RehydratePriority.index()`
* `RehydratePriority.isalnum()`
* `RehydratePriority.isalpha()`
* `RehydratePriority.isascii()`
* `RehydratePriority.isdecimal()`
* `RehydratePriority.isdigit()`
* `RehydratePriority.isidentifier()`
* `RehydratePriority.islower()`
* `RehydratePriority.isnumeric()`
* `RehydratePriority.isprintable()`
* `RehydratePriority.isspace()`
* `RehydratePriority.istitle()`
* `RehydratePriority.isupper()`
* `RehydratePriority.join()`
* `RehydratePriority.ljust()`
* `RehydratePriority.lower()`
* `RehydratePriority.lstrip()`
* `RehydratePriority.maketrans()`
* `RehydratePriority.partition()`
* `RehydratePriority.removeprefix()`
* `RehydratePriority.removesuffix()`
* `RehydratePriority.replace()`
* `RehydratePriority.rfind()`
* `RehydratePriority.rindex()`
* `RehydratePriority.rjust()`
* `RehydratePriority.rpartition()`
* `RehydratePriority.rsplit()`
* `RehydratePriority.rstrip()`
* `RehydratePriority.split()`
* `RehydratePriority.splitlines()`
* `RehydratePriority.startswith()`
* `RehydratePriority.strip()`
* `RehydratePriority.swapcase()`
* `RehydratePriority.title()`
* `RehydratePriority.translate()`
* `RehydratePriority.upper()`
* `RehydratePriority.zfill()`
* `RehydratePriority.HIGH`
* `RehydratePriority.STANDARD`
* `ResourceTypes`
* `ResourceTypes.from_string()`
* `ResourceTypes.container`
* `ResourceTypes.object`
* `ResourceTypes.service`
* `RetentionPolicy`
* `RetentionPolicy.as_dict()`
* `RetentionPolicy.deserialize()`
* `RetentionPolicy.enable_additional_properties_sending()`
* `RetentionPolicy.from_dict()`
* `RetentionPolicy.is_xml_model()`
* `RetentionPolicy.serialize()`
* `RetentionPolicy.days`
* `RetentionPolicy.enabled`
* `SequenceNumberAction`
* `SequenceNumberAction.capitalize()`
* `SequenceNumberAction.casefold()`
* `SequenceNumberAction.center()`
* `SequenceNumberAction.count()`
* `SequenceNumberAction.encode()`
* `SequenceNumberAction.endswith()`
* `SequenceNumberAction.expandtabs()`
* `SequenceNumberAction.find()`
* `SequenceNumberAction.format()`
* `SequenceNumberAction.format_map()`
* `SequenceNumberAction.index()`
* `SequenceNumberAction.isalnum()`
* `SequenceNumberAction.isalpha()`
* `SequenceNumberAction.isascii()`
* `SequenceNumberAction.isdecimal()`
* `SequenceNumberAction.isdigit()`
* `SequenceNumberAction.isidentifier()`
* `SequenceNumberAction.islower()`
* `SequenceNumberAction.isnumeric()`
* `SequenceNumberAction.isprintable()`
* `SequenceNumberAction.isspace()`
* `SequenceNumberAction.istitle()`
* `SequenceNumberAction.isupper()`
* `SequenceNumberAction.join()`
* `SequenceNumberAction.ljust()`
* `SequenceNumberAction.lower()`
* `SequenceNumberAction.lstrip()`
* `SequenceNumberAction.maketrans()`
* `SequenceNumberAction.partition()`
* `SequenceNumberAction.removeprefix()`
* `SequenceNumberAction.removesuffix()`
* `SequenceNumberAction.replace()`
* `SequenceNumberAction.rfind()`
* `SequenceNumberAction.rindex()`
* `SequenceNumberAction.rjust()`
* `SequenceNumberAction.rpartition()`
* `SequenceNumberAction.rsplit()`
* `SequenceNumberAction.rstrip()`
* `SequenceNumberAction.split()`
* `SequenceNumberAction.splitlines()`
* `SequenceNumberAction.startswith()`
* `SequenceNumberAction.strip()`
* `SequenceNumberAction.swapcase()`
* `SequenceNumberAction.title()`
* `SequenceNumberAction.translate()`
* `SequenceNumberAction.upper()`
* `SequenceNumberAction.zfill()`
* `SequenceNumberAction.INCREMENT`
* `SequenceNumberAction.MAX`
* `SequenceNumberAction.UPDATE`
* `Services`
* `Services.from_string()`
* `StandardBlobTier`
* `StandardBlobTier.capitalize()`
* `StandardBlobTier.casefold()`
* `StandardBlobTier.center()`
* `StandardBlobTier.count()`
* `StandardBlobTier.encode()`
* `StandardBlobTier.endswith()`
* `StandardBlobTier.expandtabs()`
* `StandardBlobTier.find()`
* `StandardBlobTier.format()`
* `StandardBlobTier.format_map()`
* `StandardBlobTier.index()`
* `StandardBlobTier.isalnum()`
* `StandardBlobTier.isalpha()`
* `StandardBlobTier.isascii()`
* `StandardBlobTier.isdecimal()`
* `StandardBlobTier.isdigit()`
* `StandardBlobTier.isidentifier()`
* `StandardBlobTier.islower()`
* `StandardBlobTier.isnumeric()`
* `StandardBlobTier.isprintable()`
* `StandardBlobTier.isspace()`
* `StandardBlobTier.istitle()`
* `StandardBlobTier.isupper()`
* `StandardBlobTier.join()`
* `StandardBlobTier.ljust()`
* `StandardBlobTier.lower()`
* `StandardBlobTier.lstrip()`
* `StandardBlobTier.maketrans()`
* `StandardBlobTier.partition()`
* `StandardBlobTier.removeprefix()`
* `StandardBlobTier.removesuffix()`
* `StandardBlobTier.replace()`
* `StandardBlobTier.rfind()`
* `StandardBlobTier.rindex()`
* `StandardBlobTier.rjust()`
* `StandardBlobTier.rpartition()`
* `StandardBlobTier.rsplit()`
* `StandardBlobTier.rstrip()`
* `StandardBlobTier.split()`
* `StandardBlobTier.splitlines()`
* `StandardBlobTier.startswith()`
* `StandardBlobTier.strip()`
* `StandardBlobTier.swapcase()`
* `StandardBlobTier.title()`
* `StandardBlobTier.translate()`
* `StandardBlobTier.upper()`
* `StandardBlobTier.zfill()`
* `StandardBlobTier.ARCHIVE`
* `StandardBlobTier.COLD`
* `StandardBlobTier.COOL`
* `StandardBlobTier.HOT`
* `StaticWebsite`
* `StaticWebsite.as_dict()`
* `StaticWebsite.deserialize()`
* `StaticWebsite.enable_additional_properties_sending()`
* `StaticWebsite.from_dict()`
* `StaticWebsite.is_xml_model()`
* `StaticWebsite.serialize()`
* `StaticWebsite.default_index_document_path`
* `StaticWebsite.enabled`
* `StaticWebsite.error_document404_path`
* `StaticWebsite.index_document`
* `StorageErrorCode`
* `StorageErrorCode.capitalize()`
* `StorageErrorCode.casefold()`
* `StorageErrorCode.center()`
* `StorageErrorCode.count()`
* `StorageErrorCode.encode()`
* `StorageErrorCode.endswith()`
* `StorageErrorCode.expandtabs()`
* `StorageErrorCode.find()`
* `StorageErrorCode.format()`
* `StorageErrorCode.format_map()`
* `StorageErrorCode.index()`
* `StorageErrorCode.isalnum()`
* `StorageErrorCode.isalpha()`
* `StorageErrorCode.isascii()`
* `StorageErrorCode.isdecimal()`
* `StorageErrorCode.isdigit()`
* `StorageErrorCode.isidentifier()`
* `StorageErrorCode.islower()`
* `StorageErrorCode.isnumeric()`
* `StorageErrorCode.isprintable()`
* `StorageErrorCode.isspace()`
* `StorageErrorCode.istitle()`
* `StorageErrorCode.isupper()`
* `StorageErrorCode.join()`
* `StorageErrorCode.ljust()`
* `StorageErrorCode.lower()`
* `StorageErrorCode.lstrip()`
* `StorageErrorCode.maketrans()`
* `StorageErrorCode.partition()`
* `StorageErrorCode.removeprefix()`
* `StorageErrorCode.removesuffix()`
* `StorageErrorCode.replace()`
* `StorageErrorCode.rfind()`
* `StorageErrorCode.rindex()`
* `StorageErrorCode.rjust()`
* `StorageErrorCode.rpartition()`
* `StorageErrorCode.rsplit()`
* `StorageErrorCode.rstrip()`
* `StorageErrorCode.split()`
* `StorageErrorCode.splitlines()`
* `StorageErrorCode.startswith()`
* `StorageErrorCode.strip()`
* `StorageErrorCode.swapcase()`
* `StorageErrorCode.title()`
* `StorageErrorCode.translate()`
* `StorageErrorCode.upper()`
* `StorageErrorCode.zfill()`
* `StorageErrorCode.ACCOUNT_ALREADY_EXISTS`
* `StorageErrorCode.ACCOUNT_BEING_CREATED`
* `StorageErrorCode.ACCOUNT_IS_DISABLED`
* `StorageErrorCode.APPEND_POSITION_CONDITION_NOT_MET`
* `StorageErrorCode.AUTHENTICATION_FAILED`
* `StorageErrorCode.AUTHORIZATION_FAILURE`
* `StorageErrorCode.BLOB_ALREADY_EXISTS`
* `StorageErrorCode.BLOB_ARCHIVED`
* `StorageErrorCode.BLOB_BEING_REHYDRATED`
* `StorageErrorCode.BLOB_NOT_ARCHIVED`
* `StorageErrorCode.BLOB_NOT_FOUND`
* `StorageErrorCode.BLOB_OVERWRITTEN`
* `StorageErrorCode.BLOB_TIER_INADEQUATE_FOR_CONTENT_LENGTH`
* `StorageErrorCode.BLOCK_COUNT_EXCEEDS_LIMIT`
* `StorageErrorCode.BLOCK_LIST_TOO_LONG`
* `StorageErrorCode.CANNOT_CHANGE_TO_LOWER_TIER`
* `StorageErrorCode.CANNOT_DELETE_FILE_OR_DIRECTORY`
* `StorageErrorCode.CANNOT_VERIFY_COPY_SOURCE`
* `StorageErrorCode.CLIENT_CACHE_FLUSH_DELAY`
* `StorageErrorCode.CONDITION_HEADERS_NOT_SUPPORTED`
* `StorageErrorCode.CONDITION_NOT_MET`
* `StorageErrorCode.CONTAINER_ALREADY_EXISTS`
* `StorageErrorCode.CONTAINER_BEING_DELETED`
* `StorageErrorCode.CONTAINER_DISABLED`
* `StorageErrorCode.CONTAINER_NOT_FOUND`
* `StorageErrorCode.CONTAINER_QUOTA_DOWNGRADE_NOT_ALLOWED`
* `StorageErrorCode.CONTENT_LENGTH_LARGER_THAN_TIER_LIMIT`
* `StorageErrorCode.CONTENT_LENGTH_MUST_BE_ZERO`
* `StorageErrorCode.COPY_ACROSS_ACCOUNTS_NOT_SUPPORTED`
* `StorageErrorCode.COPY_ID_MISMATCH`
* `StorageErrorCode.DELETE_PENDING`
* `StorageErrorCode.DESTINATION_PATH_IS_BEING_DELETED`
* `StorageErrorCode.DIRECTORY_NOT_EMPTY`
* `StorageErrorCode.EMPTY_METADATA_KEY`
* `StorageErrorCode.FEATURE_VERSION_MISMATCH`
* `StorageErrorCode.FILE_LOCK_CONFLICT`
* `StorageErrorCode.FILE_SYSTEM_ALREADY_EXISTS`
* `StorageErrorCode.FILE_SYSTEM_BEING_DELETED`
* `StorageErrorCode.FILE_SYSTEM_NOT_FOUND`
* `StorageErrorCode.INCREMENTAL_COPY_BLOB_MISMATCH`
* `StorageErrorCode.INCREMENTAL_COPY_OF_EARLIER_VERSION_SNAPSHOT_NOT_ALLOWED`
* `StorageErrorCode.INCREMENTAL_COPY_OF_ERALIER_VERSION_SNAPSHOT_NOT_ALLOWED`
* `StorageErrorCode.INCREMENTAL_COPY_SOURCE_MUST_BE_SNAPSHOT`
* `StorageErrorCode.INFINITE_LEASE_DURATION_REQUIRED`
* `StorageErrorCode.INSUFFICIENT_ACCOUNT_PERMISSIONS`
* `StorageErrorCode.INTERNAL_ERROR`
* `StorageErrorCode.INVALID_AUTHENTICATION_INFO`
* `StorageErrorCode.INVALID_BLOB_OR_BLOCK`
* `StorageErrorCode.INVALID_BLOB_TIER`
* `StorageErrorCode.INVALID_BLOB_TYPE`
* `StorageErrorCode.INVALID_BLOCK_ID`
* `StorageErrorCode.INVALID_BLOCK_LIST`
* `StorageErrorCode.INVALID_DESTINATION_PATH`
* `StorageErrorCode.INVALID_FILE_OR_DIRECTORY_PATH_NAME`
* `StorageErrorCode.INVALID_FLUSH_POSITION`
* `StorageErrorCode.INVALID_HEADER_VALUE`
* `StorageErrorCode.INVALID_HTTP_VERB`
* `StorageErrorCode.INVALID_INPUT`
* `StorageErrorCode.INVALID_MARKER`
* `StorageErrorCode.INVALID_MD5`
* `StorageErrorCode.INVALID_METADATA`
* `StorageErrorCode.INVALID_OPERATION`
* `StorageErrorCode.INVALID_PAGE_RANGE`
* `StorageErrorCode.INVALID_PROPERTY_NAME`
* `StorageErrorCode.INVALID_QUERY_PARAMETER_VALUE`
* `StorageErrorCode.INVALID_RANGE`
* `StorageErrorCode.INVALID_RENAME_SOURCE_PATH`
* `StorageErrorCode.INVALID_RESOURCE_NAME`
* `StorageErrorCode.INVALID_SOURCE_BLOB_TYPE`
* `StorageErrorCode.INVALID_SOURCE_BLOB_URL`
* `StorageErrorCode.INVALID_SOURCE_OR_DESTINATION_RESOURCE_TYPE`
* `StorageErrorCode.INVALID_SOURCE_URI`
* `StorageErrorCode.INVALID_URI`
* `StorageErrorCode.INVALID_VERSION_FOR_PAGE_BLOB_OPERATION`
* `StorageErrorCode.INVALID_XML_DOCUMENT`
* `StorageErrorCode.INVALID_XML_NODE_VALUE`
* `StorageErrorCode.LEASE_ALREADY_BROKEN`
* `StorageErrorCode.LEASE_ALREADY_PRESENT`
* `StorageErrorCode.LEASE_ID_MISMATCH_WITH_BLOB_OPERATION`
* `StorageErrorCode.LEASE_ID_MISMATCH_WITH_CONTAINER_OPERATION`
* `StorageErrorCode.LEASE_ID_MISMATCH_WITH_LEASE_OPERATION`
* `StorageErrorCode.LEASE_ID_MISSING`
* `StorageErrorCode.LEASE_IS_ALREADY_BROKEN`
* `StorageErrorCode.LEASE_IS_BREAKING_AND_CANNOT_BE_ACQUIRED`
* `StorageErrorCode.LEASE_IS_BREAKING_AND_CANNOT_BE_CHANGED`
* `StorageErrorCode.LEASE_IS_BROKEN_AND_CANNOT_BE_RENEWED`
* `StorageErrorCode.LEASE_LOST`
* `StorageErrorCode.LEASE_NAME_MISMATCH`
* `StorageErrorCode.LEASE_NOT_PRESENT_WITH_BLOB_OPERATION`
* `StorageErrorCode.LEASE_NOT_PRESENT_WITH_CONTAINER_OPERATION`
* `StorageErrorCode.LEASE_NOT_PRESENT_WITH_LEASE_OPERATION`
* `StorageErrorCode.MAX_BLOB_SIZE_CONDITION_NOT_MET`
* `StorageErrorCode.MD5_MISMATCH`
* `StorageErrorCode.MESSAGE_NOT_FOUND`
* `StorageErrorCode.MESSAGE_TOO_LARGE`
* `StorageErrorCode.METADATA_TOO_LARGE`
* `StorageErrorCode.MISSING_CONTENT_LENGTH_HEADER`
* `StorageErrorCode.MISSING_REQUIRED_HEADER`
* `StorageErrorCode.MISSING_REQUIRED_QUERY_PARAMETER`
* `StorageErrorCode.MISSING_REQUIRED_XML_NODE`
* `StorageErrorCode.MULTIPLE_CONDITION_HEADERS_NOT_SUPPORTED`
* `StorageErrorCode.NO_AUTHENTICATION_INFORMATION`
* `StorageErrorCode.NO_PENDING_COPY_OPERATION`
* `StorageErrorCode.OPERATION_NOT_ALLOWED_ON_INCREMENTAL_COPY_BLOB`
* `StorageErrorCode.OPERATION_TIMED_OUT`
* `StorageErrorCode.OUT_OF_RANGE_INPUT`
* `StorageErrorCode.OUT_OF_RANGE_QUERY_PARAMETER_VALUE`
* `StorageErrorCode.PARENT_NOT_FOUND`
* `StorageErrorCode.PATH_ALREADY_EXISTS`
* `StorageErrorCode.PATH_CONFLICT`
* `StorageErrorCode.PATH_NOT_FOUND`
* `StorageErrorCode.PENDING_COPY_OPERATION`
* `StorageErrorCode.POP_RECEIPT_MISMATCH`
* `StorageErrorCode.PREVIOUS_SNAPSHOT_CANNOT_BE_NEWER`
* `StorageErrorCode.PREVIOUS_SNAPSHOT_NOT_FOUND`
* `StorageErrorCode.PREVIOUS_SNAPSHOT_OPERATION_NOT_SUPPORTED`
* `StorageErrorCode.QUEUE_ALREADY_EXISTS`
* `StorageErrorCode.QUEUE_BEING_DELETED`
* `StorageErrorCode.QUEUE_DISABLED`
* `StorageErrorCode.QUEUE_NOT_EMPTY`
* `StorageErrorCode.QUEUE_NOT_FOUND`
* `StorageErrorCode.READ_ONLY_ATTRIBUTE`
* `StorageErrorCode.RENAME_DESTINATION_PARENT_PATH_NOT_FOUND`
* `StorageErrorCode.REQUEST_BODY_TOO_LARGE`
* `StorageErrorCode.REQUEST_URL_FAILED_TO_PARSE`
* `StorageErrorCode.RESOURCE_ALREADY_EXISTS`
* `StorageErrorCode.RESOURCE_NOT_FOUND`
* `StorageErrorCode.RESOURCE_TYPE_MISMATCH`
* `StorageErrorCode.SEQUENCE_NUMBER_CONDITION_NOT_MET`
* `StorageErrorCode.SEQUENCE_NUMBER_INCREMENT_TOO_LARGE`
* `StorageErrorCode.SERVER_BUSY`
* `StorageErrorCode.SHARE_ALREADY_EXISTS`
* `StorageErrorCode.SHARE_BEING_DELETED`
* `StorageErrorCode.SHARE_DISABLED`
* `StorageErrorCode.SHARE_HAS_SNAPSHOTS`
* `StorageErrorCode.SHARE_NOT_FOUND`
* `StorageErrorCode.SHARE_SNAPSHOT_COUNT_EXCEEDED`
* `StorageErrorCode.SHARE_SNAPSHOT_IN_PROGRESS`
* `StorageErrorCode.SHARE_SNAPSHOT_OPERATION_NOT_SUPPORTED`
* `StorageErrorCode.SHARING_VIOLATION`
* `StorageErrorCode.SNAPHOT_OPERATION_RATE_EXCEEDED`
* `StorageErrorCode.SNAPSHOTS_PRESENT`
* `StorageErrorCode.SNAPSHOT_COUNT_EXCEEDED`
* `StorageErrorCode.SNAPSHOT_OPERATION_RATE_EXCEEDED`
* `StorageErrorCode.SOURCE_CONDITION_NOT_MET`
* `StorageErrorCode.SOURCE_PATH_IS_BEING_DELETED`
* `StorageErrorCode.SOURCE_PATH_NOT_FOUND`
* `StorageErrorCode.SYSTEM_IN_USE`
* `StorageErrorCode.TARGET_CONDITION_NOT_MET`
* `StorageErrorCode.UNAUTHORIZED_BLOB_OVERWRITE`
* `StorageErrorCode.UNSUPPORTED_HEADER`
* `StorageErrorCode.UNSUPPORTED_HTTP_VERB`
* `StorageErrorCode.UNSUPPORTED_QUERY_PARAMETER`
* `StorageErrorCode.UNSUPPORTED_REST_VERSION`
* `StorageErrorCode.UNSUPPORTED_XML_NODE`
* `StorageStreamDownloader`
* `StorageStreamDownloader.chunks()`
* `StorageStreamDownloader.content_as_bytes()`
* `StorageStreamDownloader.content_as_text()`
* `StorageStreamDownloader.download_to_stream()`
* `StorageStreamDownloader.read()`
* `StorageStreamDownloader.readall()`
* `StorageStreamDownloader.readinto()`
* `StorageStreamDownloader.container`
* `StorageStreamDownloader.name`
* `StorageStreamDownloader.properties`
* `StorageStreamDownloader.size`
* `UserDelegationKey`
* `UserDelegationKey.signed_expiry`
* `UserDelegationKey.signed_oid`
* `UserDelegationKey.signed_service`
* `UserDelegationKey.signed_start`
* `UserDelegationKey.signed_tid`
* `UserDelegationKey.signed_version`
* `UserDelegationKey.value`
* `download_blob_from_url()`
* `generate_account_sas()`
* `generate_blob_sas()`
* `generate_container_sas()`
* `upload_blob_to_url()`
* Subpackages
* azure.storage.blob.aio package
__Azure SDK for Python
*   * azure.storage.blob package
* View page source
* * *
# azure.storage.blob package¶
_exception _azure.storage.blob.PartialBatchErrorException(_message_ ,
_response_ , _parts_)[source]¶
There is a partial failure in batch operations.
Parameters:
* **message** (_str_) – The message of the exception.
* **response** – Server response to be deserialized.
* **parts** (_list_) – A list of the parts in multipart response.
add_note()¶
Exception.add_note(note) – add a note to the exception
raise_with_traceback() → None¶
Raise the exception with the existing traceback.
Deprecated since version 1.22.0: This method is deprecated as we don’t support
Python 2 anymore. Use raise/from instead.
with_traceback()¶
Exception.with_traceback(tb) – set self.__traceback__ to tb and return self.
args¶
_class _azure.storage.blob.AccessPolicy(_permission : ContainerSasPermissions | str | None = None_, _expiry : datetime | str | None = None_, _start : datetime | str | None = None_)[source]¶
Access Policy class used by the set and get access policy methods in each
service.
A stored access policy can specify the start time, expiry time, and
permissions for the Shared Access Signatures with which it’s associated.
Depending on how you want to control access to your resource, you can specify
all of these parameters within the stored access policy, and omit them from
the URL for the Shared Access Signature. Doing so permits you to modify the
associated signature’s behavior at any time, as well as to revoke it. Or you
can specify one or more of the access policy parameters within the stored
access policy, and the others on the URL. Finally, you can specify all of the
parameters on the URL. In this case, you can use the stored access policy to
revoke the signature, but not to modify its behavior.
Together the Shared Access Signature and the stored access policy must include
all fields required to authenticate the signature. If any required fields are
missing, the request will fail. Likewise, if a field is specified both in the
Shared Access Signature URL and in the stored access policy, the request will
fail with status code 400 (Bad Request).
Parameters:
* **permission** (_Optional_ _[__Union_ _[__ContainerSasPermissions_ _,__str_ _]__]_) – The permissions associated with the shared access signature. The user is restricted to operations allowed by the permissions. Required unless an id is given referencing a stored access policy which contains this field. This field must be omitted if it has been specified in an associated stored access policy.
* **expiry** – The time at which the shared access signature becomes invalid. Required unless an id is given referencing a stored access policy which contains this field. This field must be omitted if it has been specified in an associated stored access policy. Azure will always convert values to UTC. If a date is passed in without timezone info, it is assumed to be UTC.
* **start** – The time at which the shared access signature becomes valid. If omitted, start time for this call is assumed to be the time when the storage service receives the request. Azure will always convert values to UTC. If a date is passed in without timezone info, it is assumed to be UTC.
Keyword Arguments:
* **start** (_str_) – the date-time the policy is active.
* **expiry** (_str_) – the date-time the policy expires.
* **permission** (_str_) – the permissions for the acl policy.
as_dict(_keep_readonly: bool = True, key_transformer: ~typing.Callable[[str,
~typing.Dict[str, ~typing.Any], ~typing.Any], ~typing.Any] = <function
attribute_transformer>, **kwargs: ~typing.Any_) → MutableMapping[str, Any]¶
Return a dict that can be serialized using json.dump.
Advanced usage might optionally use a callback as parameter:
Key is the attribute name used in Python. Attr_desc is a dict of metadata.
Currently contains ‘type’ with the msrest type and ‘key’ with the RestAPI
encoded key. Value is the current value in this object.
The string returned will be used to serialize the key. If the return type is a
list, this is considered hierarchical result dict.
See the three examples in this file:
* attribute_transformer
* full_restapi_key_transformer
* last_restapi_key_transformer
If you want XML serialization, you can pass the kwargs is_xml=True.
Parameters:
**key_transformer** (_function_) – A key transformer function.
Returns:
A dict JSON compatible object
Return type:
dict
_classmethod _deserialize(_data : Any_, _content_type : str | None = None_) → ModelType¶
Parse a str using the RestAPI syntax and return a model.
Parameters:
* **data** (_str_) – A str using RestAPI structure. JSON by default.
* **content_type** (_str_) – JSON by default, set application/xml if XML.
Returns:
An instance of this model
Raises:
DeserializationError if something went wrong
_classmethod _enable_additional_properties_sending() → None¶
_classmethod _from_dict(_data : Any_, _key_extractors : Callable[[str, Dict[str, Any], Any], Any] | None = None_, _content_type : str | None = None_) → ModelType¶
Parse a dict using given key extractor return a model.
By default consider key extractors (rest_key_case_insensitive_extractor,
attribute_key_case_insensitive_extractor and
last_rest_key_case_insensitive_extractor)
Parameters:
* **data** (_dict_) – A dict using RestAPI structure
* **content_type** (_str_) – JSON by default, set application/xml if XML.
Returns:
An instance of this model
Raises:
DeserializationError if something went wrong
_classmethod _is_xml_model() → bool¶
serialize(_keep_readonly : bool = False_, _** kwargs: Any_) →
MutableMapping[str, Any]¶
Return the JSON that would be sent to server from this model.
This is an alias to as_dict(full_restapi_key_transformer,
keep_readonly=False).
If you want XML serialization, you can pass the kwargs is_xml=True.
Parameters:
**keep_readonly** (_bool_) – If you want to serialize the readonly attributes
Returns:
A dict JSON compatible object
Return type:
dict
expiry _: datetime | str | None_¶
The time at which the shared access signature becomes invalid.
permission _: ContainerSasPermissions | str | None_¶
The permissions associated with the shared access signature. The user is
restricted to operations allowed by the permissions.
start _: datetime | str | None_¶
The time at which the shared access signature becomes valid.
_class _azure.storage.blob.AccountSasPermissions(_read : bool = False_, _write
: bool = False_, _delete : bool = False_, _list : bool = False_, _add : bool =
False_, _create : bool = False_, _update : bool = False_, _process : bool =
False_, _delete_previous_version : bool = False_, _** kwargs_)[source]¶
`ResourceTypes` class to be used with generate_account_sas function and for
the AccessPolicies used with set_*_acl. There are two types of SAS which may
be used to grant resource access. One is to grant access to a specific
resource (resource-specific). Another is to grant access to the entire service
for a specific account and allow certain operations based on perms found here.
Parameters:
* **read** (_bool_) – Valid for all signed resources types (Service, Container, and Object). Permits read permissions to the specified resource type.
* **write** (_bool_) – Valid for all signed resources types (Service, Container, and Object). Permits write permissions to the specified resource type.
* **delete** (_bool_) – Valid for Container and Object resource types, except for queue messages.
* **delete_previous_version** (_bool_) – Delete the previous blob version for the versioning enabled storage account.
* **list** (_bool_) – Valid for Service and Container resource types only.
* **add** (_bool_) – Valid for the following Object resource types only: queue messages, and append blobs.
* **create** (_bool_) – Valid for the following Object resource types only: blobs and files. Users can create new blobs or files, but may not overwrite existing blobs or files.
* **update** (_bool_) – Valid for the following Object resource types only: queue messages.
* **process** (_bool_) – Valid for the following Object resource type only: queue messages.
Keyword Arguments:
* **tag** (_bool_) – To enable set or get tags on the blobs in the container.
* **filter_by_tags** (_bool_) – To enable get blobs by tags, this should be used together with list permission.
* **set_immutability_policy** (_bool_) – To enable operations related to set/delete immutability policy. To get immutability policy, you just need read permission.
* **permanent_delete** (_bool_) – To enable permanent delete on the blob is permitted. Valid for Object resource type of Blob only.
_classmethod _from_string(_permission_)[source]¶
Create AccountSasPermissions from a string.
To specify read, write, delete, etc. permissions you need only to include the
first letter of the word in the string. E.g. for read and write permissions
you would provide a string “rw”.
Parameters:
**permission** (_str_) – Specify permissions in the string with the first
letter of the word.
Returns:
An AccountSasPermissions object
Return type:
_AccountSasPermissions_
add _: bool_ _ = False_¶
create _: bool_ _ = False_¶
delete _: bool_ _ = False_¶
delete_previous_version _: bool_ _ = False_¶
filter_by_tags _: bool_ _ = False_¶
list _: bool_ _ = False_¶
permanent_delete _: bool_ _ = False_¶
process _: bool_ _ = False_¶
read _: bool_ _ = False_¶
set_immutability_policy _: bool_ _ = False_¶
tag _: bool_ _ = False_¶
update _: bool_ _ = False_¶
write _: bool_ _ = False_¶
_class _azure.storage.blob.ArrowDialect(_type_ , _** kwargs: Any_)[source]¶
field of an arrow schema.
All required parameters must be populated in order to send to Azure.
Parameters:
**type** (_ArrowType_) – Arrow field type.
Keyword Arguments:
* **name** (_str_) – The name of the field.
* **precision** (_int_) – The precision of the field.
* **scale** (_int_) – The scale of the field.
* **type** (_str_) – Required.
* **name**
* **precision**
* **scale**
as_dict(_keep_readonly: bool = True, key_transformer: ~typing.Callable[[str,
~typing.Dict[str, ~typing.Any], ~typing.Any], ~typing.Any] = <function
attribute_transformer>, **kwargs: ~typing.Any_) → MutableMapping[str, Any]¶
Return a dict that can be serialized using json.dump.
Advanced usage might optionally use a callback as parameter:
Key is the attribute name used in Python. Attr_desc is a dict of metadata.
Currently contains ‘type’ with the msrest type and ‘key’ with the RestAPI
encoded key. Value is the current value in this object.
The string returned will be used to serialize the key. If the return type is a
list, this is considered hierarchical result dict.
See the three examples in this file:
* attribute_transformer
* full_restapi_key_transformer
* last_restapi_key_transformer
If you want XML serialization, you can pass the kwargs is_xml=True.
Parameters:
**key_transformer** (_function_) – A key transformer function.
Returns:
A dict JSON compatible object
Return type:
dict
_classmethod _deserialize(_data : Any_, _content_type : str | None = None_) → ModelType¶
Parse a str using the RestAPI syntax and return a model.
Parameters:
* **data** (_str_) – A str using RestAPI structure. JSON by default.
* **content_type** (_str_) – JSON by default, set application/xml if XML.
Returns:
An instance of this model
Raises:
DeserializationError if something went wrong
_classmethod _enable_additional_properties_sending() → None¶
_classmethod _from_dict(_data : Any_, _key_extractors : Callable[[str, Dict[str, Any], Any], Any] | None = None_, _content_type : str | None = None_) → ModelType¶
Parse a dict using given key extractor return a model.
By default consider key extractors (rest_key_case_insensitive_extractor,
attribute_key_case_insensitive_extractor and
last_rest_key_case_insensitive_extractor)
Parameters:
* **data** (_dict_) – A dict using RestAPI structure
* **content_type** (_str_) – JSON by default, set application/xml if XML.
Returns:
An instance of this model
Raises:
DeserializationError if something went wrong
_classmethod _is_xml_model() → bool¶
serialize(_keep_readonly : bool = False_, _** kwargs: Any_) →
MutableMapping[str, Any]¶
Return the JSON that would be sent to server from this model.
This is an alias to as_dict(full_restapi_key_transformer,
keep_readonly=False).
If you want XML serialization, you can pass the kwargs is_xml=True.
Parameters:
**keep_readonly** (_bool_) – If you want to serialize the readonly attributes
Returns:
A dict JSON compatible object
Return type:
dict
_class _azure.storage.blob.ArrowType(_value_ , _names =None_, _*_ , _module
=None_, _qualname =None_, _type =None_, _start =1_, _boundary =None_)[source]¶
capitalize()¶
Return a capitalized version of the string.
More specifically, make the first character have upper case and the rest lower
case.
casefold()¶
Return a version of the string suitable for caseless comparisons.
center(_width_ , _fillchar =' '_, _/_)¶
Return a centered string of length width.
Padding is done using the specified fill character (default is a space).
count(_sub_[, _start_[, _end_]]) → int¶
Return the number of non-overlapping occurrences of substring sub in string
S[start:end]. Optional arguments start and end are interpreted as in slice
notation.
encode(_encoding ='utf-8'_, _errors ='strict'_)¶
Encode the string using the codec registered for encoding.
encoding
The encoding in which to encode the string.
errors
The error handling scheme to use for encoding errors. The default is ‘strict’
meaning that encoding errors raise a UnicodeEncodeError. Other possible values
are ‘ignore’, ‘replace’ and ‘xmlcharrefreplace’ as well as any other name
registered with codecs.register_error that can handle UnicodeEncodeErrors.
endswith(_suffix_[, _start_[, _end_]]) → bool¶
Return True if S ends with the specified suffix, False otherwise. With
optional start, test S beginning at that position. With optional end, stop
comparing S at that position. suffix can also be a tuple of strings to try.
expandtabs(_tabsize =8_)¶
Return a copy where all tab characters are expanded using spaces.
If tabsize is not given, a tab size of 8 characters is assumed.
find(_sub_[, _start_[, _end_]]) → int¶
Return the lowest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Return -1 on failure.
format(_* args_, _** kwargs_) → str¶
Return a formatted version of S, using substitutions from args and kwargs. The
substitutions are identified by braces (‘{’ and ‘}’).
format_map(_mapping_) → str¶
Return a formatted version of S, using substitutions from mapping. The
substitutions are identified by braces (‘{’ and ‘}’).
index(_sub_[, _start_[, _end_]]) → int¶
Return the lowest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Raises ValueError when the substring is not found.
isalnum()¶
Return True if the string is an alpha-numeric string, False otherwise.
A string is alpha-numeric if all characters in the string are alpha-numeric
and there is at least one character in the string.
isalpha()¶
Return True if the string is an alphabetic string, False otherwise.
A string is alphabetic if all characters in the string are alphabetic and
there is at least one character in the string.
isascii()¶
Return True if all characters in the string are ASCII, False otherwise.
ASCII characters have code points in the range U+0000-U+007F. Empty string is
ASCII too.
isdecimal()¶
Return True if the string is a decimal string, False otherwise.
A string is a decimal string if all characters in the string are decimal and
there is at least one character in the string.
isdigit()¶
Return True if the string is a digit string, False otherwise.
A string is a digit string if all characters in the string are digits and
there is at least one character in the string.
isidentifier()¶
Return True if the string is a valid Python identifier, False otherwise.
Call keyword.iskeyword(s) to test whether string s is a reserved identifier,
such as “def” or “class”.
islower()¶
Return True if the string is a lowercase string, False otherwise.
A string is lowercase if all cased characters in the string are lowercase and
there is at least one cased character in the string.
isnumeric()¶
Return True if the string is a numeric string, False otherwise.
A string is numeric if all characters in the string are numeric and there is
at least one character in the string.
isprintable()¶
Return True if the string is printable, False otherwise.
A string is printable if all of its characters are considered printable in
repr() or if it is empty.
isspace()¶
Return True if the string is a whitespace string, False otherwise.
A string is whitespace if all characters in the string are whitespace and
there is at least one character in the string.
istitle()¶
Return True if the string is a title-cased string, False otherwise.
In a title-cased string, upper- and title-case characters may only follow
uncased characters and lowercase characters only cased ones.
isupper()¶
Return True if the string is an uppercase string, False otherwise.
A string is uppercase if all cased characters in the string are uppercase and
there is at least one cased character in the string.
join(_iterable_ , _/_)¶
Concatenate any number of strings.
The string whose method is called is inserted in between each given string.
The result is returned as a new string.
Example: ‘.’.join([‘ab’, ‘pq’, ‘rs’]) -> ‘ab.pq.rs’
ljust(_width_ , _fillchar =' '_, _/_)¶
Return a left-justified string of length width.
Padding is done using the specified fill character (default is a space).
lower()¶
Return a copy of the string converted to lowercase.
lstrip(_chars =None_, _/_)¶
Return a copy of the string with leading whitespace removed.
If chars is given and not None, remove characters in chars instead.
_static _maketrans()¶
Return a translation table usable for str.translate().
If there is only one argument, it must be a dictionary mapping Unicode
ordinals (integers) or characters to Unicode ordinals, strings or None.
Character keys will be then converted to ordinals. If there are two arguments,
they must be strings of equal length, and in the resulting dictionary, each
character in x will be mapped to the character at the same position in y. If
there is a third argument, it must be a string, whose characters will be
mapped to None in the result.
partition(_sep_ , _/_)¶
Partition the string into three parts using the given separator.
This will search for the separator in the string. If the separator is found,
returns a 3-tuple containing the part before the separator, the separator
itself, and the part after it.
If the separator is not found, returns a 3-tuple containing the original
string and two empty strings.
removeprefix(_prefix_ , _/_)¶
Return a str with the given prefix string removed if present.
If the string starts with the prefix string, return string[len(prefix):].
Otherwise, return a copy of the original string.
removesuffix(_suffix_ , _/_)¶
Return a str with the given suffix string removed if present.
If the string ends with the suffix string and that suffix is not empty, return
string[:-len(suffix)]. Otherwise, return a copy of the original string.
replace(_old_ , _new_ , _count =-1_, _/_)¶
Return a copy with all occurrences of substring old replaced by new.
> count
>
>
> Maximum number of occurrences to replace. -1 (the default value) means
> replace all occurrences.
If the optional argument count is given, only the first count occurrences are
replaced.
rfind(_sub_[, _start_[, _end_]]) → int¶
Return the highest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Return -1 on failure.
rindex(_sub_[, _start_[, _end_]]) → int¶
Return the highest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Raises ValueError when the substring is not found.
rjust(_width_ , _fillchar =' '_, _/_)¶
Return a right-justified string of length width.
Padding is done using the specified fill character (default is a space).
rpartition(_sep_ , _/_)¶
Partition the string into three parts using the given separator.
This will search for the separator in the string, starting at the end. If the
separator is found, returns a 3-tuple containing the part before the
separator, the separator itself, and the part after it.
If the separator is not found, returns a 3-tuple containing two empty strings
and the original string.
rsplit(_sep =None_, _maxsplit =-1_)¶
Return a list of the substrings in the string, using sep as the separator
string.
> sep
>
>
> The separator used to split the string.
>
> When set to None (the default value), will split on any whitespace character
> (including n r t f and spaces) and will discard empty strings from the
> result.
>
> maxsplit
>
>
> Maximum number of splits. -1 (the default value) means no limit.
Splitting starts at the end of the string and works to the front.
rstrip(_chars =None_, _/_)¶
Return a copy of the string with trailing whitespace removed.
If chars is given and not None, remove characters in chars instead.
split(_sep =None_, _maxsplit =-1_)¶
Return a list of the substrings in the string, using sep as the separator
string.
> sep
>
>
> The separator used to split the string.
>
> When set to None (the default value), will split on any whitespace character
> (including n r t f and spaces) and will discard empty strings from the
> result.
>
> maxsplit
>
>
> Maximum number of splits. -1 (the default value) means no limit.
Splitting starts at the front of the string and works to the end.
Note, str.split() is mainly useful for data that has been intentionally
delimited. With natural text that includes punctuation, consider using the
regular expression module.
splitlines(_keepends =False_)¶
Return a list of the lines in the string, breaking at line boundaries.
Line breaks are not included in the resulting list unless keepends is given
and true.
startswith(_prefix_[, _start_[, _end_]]) → bool¶
Return True if S starts with the specified prefix, False otherwise. With
optional start, test S beginning at that position. With optional end, stop
comparing S at that position. prefix can also be a tuple of strings to try.
strip(_chars =None_, _/_)¶
Return a copy of the string with leading and trailing whitespace removed.
If chars is given and not None, remove characters in chars instead.
swapcase()¶
Convert uppercase characters to lowercase and lowercase characters to
uppercase.
title()¶
Return a version of the string where each word is titlecased.
More specifically, words start with uppercased characters and all remaining
cased characters have lower case.
translate(_table_ , _/_)¶
Replace each character in the string using the given translation table.
> table
>
>
> Translation table, which must be a mapping of Unicode ordinals to Unicode
> ordinals, strings, or None.
The table must implement lookup/indexing via __getitem__, for instance a
dictionary or list. If this operation raises LookupError, the character is
left untouched. Characters mapped to None are deleted.
upper()¶
Return a copy of the string converted to uppercase.
zfill(_width_ , _/_)¶
Pad a numeric string with zeros on the left, to fill a field of the given
width.
The string is never truncated.
BOOL _ = 'bool'_¶
DECIMAL _ = 'decimal'_¶
DOUBLE _ = 'double'_¶
INT64 _ = 'int64'_¶
STRING _ = 'string'_¶
TIMESTAMP_MS _ = 'timestamp[ms]'_¶
_class _azure.storage.blob.BlobAnalyticsLogging(_** kwargs: Any_)[source]¶
Azure Analytics Logging settings.
Keyword Arguments:
* **version** (_str_) – The version of Storage Analytics to configure. The default value is 1.0.
* **delete** (_bool_) – Indicates whether all delete requests should be logged. The default value is False.
* **read** (_bool_) – Indicates whether all read requests should be logged. The default value is False.
* **write** (_bool_) – Indicates whether all write requests should be logged. The default value is False.
* **retention_policy** (_RetentionPolicy_) – Determines how long the associated data should persist. If not specified the retention policy will be disabled by default.
* **version** – The version of Storage Analytics to configure. Required.
* **delete** – Indicates whether all delete requests should be logged. Required.
* **read** – Indicates whether all read requests should be logged. Required.
* **write** – Indicates whether all write requests should be logged. Required.
* **retention_policy** – the retention policy which determines how long the associated data should persist. Required.
as_dict(_keep_readonly: bool = True, key_transformer: ~typing.Callable[[str,
~typing.Dict[str, ~typing.Any], ~typing.Any], ~typing.Any] = <function
attribute_transformer>, **kwargs: ~typing.Any_) → MutableMapping[str, Any]¶
Return a dict that can be serialized using json.dump.
Advanced usage might optionally use a callback as parameter:
Key is the attribute name used in Python. Attr_desc is a dict of metadata.
Currently contains ‘type’ with the msrest type and ‘key’ with the RestAPI
encoded key. Value is the current value in this object.
The string returned will be used to serialize the key. If the return type is a
list, this is considered hierarchical result dict.
See the three examples in this file:
* attribute_transformer
* full_restapi_key_transformer
* last_restapi_key_transformer
If you want XML serialization, you can pass the kwargs is_xml=True.
Parameters:
**key_transformer** (_function_) – A key transformer function.
Returns:
A dict JSON compatible object
Return type:
dict
_classmethod _deserialize(_data : Any_, _content_type : str | None = None_) → ModelType¶
Parse a str using the RestAPI syntax and return a model.
Parameters:
* **data** (_str_) – A str using RestAPI structure. JSON by default.
* **content_type** (_str_) – JSON by default, set application/xml if XML.
Returns:
An instance of this model
Raises:
DeserializationError if something went wrong
_classmethod _enable_additional_properties_sending() → None¶
_classmethod _from_dict(_data : Any_, _key_extractors : Callable[[str, Dict[str, Any], Any], Any] | None = None_, _content_type : str | None = None_) → ModelType¶
Parse a dict using given key extractor return a model.
By default consider key extractors (rest_key_case_insensitive_extractor,
attribute_key_case_insensitive_extractor and
last_rest_key_case_insensitive_extractor)
Parameters:
* **data** (_dict_) – A dict using RestAPI structure
* **content_type** (_str_) – JSON by default, set application/xml if XML.
Returns:
An instance of this model
Raises:
DeserializationError if something went wrong
_classmethod _is_xml_model() → bool¶
serialize(_keep_readonly : bool = False_, _** kwargs: Any_) →
MutableMapping[str, Any]¶
Return the JSON that would be sent to server from this model.
This is an alias to as_dict(full_restapi_key_transformer,
keep_readonly=False).
If you want XML serialization, you can pass the kwargs is_xml=True.
Parameters:
**keep_readonly** (_bool_) – If you want to serialize the readonly attributes
Returns:
A dict JSON compatible object
Return type:
dict
delete _: bool_ _ = False_¶
Indicates whether all delete requests should be logged.
read _: bool_ _ = False_¶
Indicates whether all read requests should be logged.
retention_policy _: RetentionPolicy_ _ =
<azure.storage.blob._models.RetentionPolicy object>_¶
Determines how long the associated data should persist.
version _: str_ _ = '1.0'_¶
The version of Storage Analytics to configure.
write _: bool_ _ = False_¶
Indicates whether all write requests should be logged.
_class _azure.storage.blob.BlobBlock(_block_id : str_, _state : BlockState =
BlockState.LATEST_)[source]¶
BlockBlob Block class.
Parameters:
* **block_id** (_str_) – Block id.
* **state** (_BlockState_) – Block state. Possible values: BlockState.COMMITTED | BlockState.UNCOMMITTED
get(_key_ , _default =None_)¶
has_key(_k_)¶
items()¶
keys()¶
update(_* args_, _** kwargs_)¶
values()¶
block_id _: str_¶
Block id.
size _: int_¶
Block size.
state _: BlockState_¶
Block state.
_class _azure.storage.blob.BlobClient(_account_url : str_, _container_name : str_, _blob_name : str_, _snapshot : str | Dict[str, Any] | None = None_, _credential : str | Dict[str, str] | AzureNamedKeyCredential | AzureSasCredential | TokenCredential | None = None_, _** kwargs: Any_)[source]¶
A client to interact with a specific blob, although that blob may not yet
exist.
For more optional configuration, please click here.
Parameters:
* **account_url** (_str_) – The URI to the storage account. In order to create a client given the full URI to the blob, use the `from_blob_url()` classmethod.
* **container_name** (_str_) – The container name for the blob.
* **blob_name** (_str_) – The name of the blob with which to interact. If specified, this value will override a blob value specified in the blob URL.
* **snapshot** (_str_) – The optional blob snapshot on which to operate. This can be the snapshot ID string or the response returned from `create_snapshot()`.
* **credential** – The credentials with which to authenticate. This is optional if the account URL already has a SAS token. The value can be a SAS token string, an instance of a AzureSasCredential or AzureNamedKeyCredential from azure.core.credentials, an account shared access key, or an instance of a TokenCredentials class from azure.identity. If the resource URI already contains a SAS token, this will be ignored in favor of an explicit credential \- except in the case of AzureSasCredential, where the conflicting SAS tokens will raise a ValueError. If using an instance of AzureNamedKeyCredential, “name” should be the storage account name, and “key” should be the storage account key.
Keyword Arguments:
* **api_version** (_str_) –
The Storage API version to use for requests. Default value is the most recent
service version that is compatible with the current SDK. Setting to an older
version may result in reduced feature compatibility.
Added in version 12.2.0.
* **secondary_hostname** (_str_) – The hostname of the secondary endpoint.
* **max_block_size** (_int_) – The maximum chunk size for uploading a block blob in chunks. Defaults to 4*1024*1024, or 4MB.
* **max_single_put_size** (_int_) – If the blob size is less than or equal max_single_put_size, then the blob will be uploaded with only one http PUT request. If the blob size is larger than max_single_put_size, the blob will be uploaded in chunks. Defaults to 64*1024*1024, or 64MB.
* **min_large_block_upload_threshold** (_int_) – The minimum chunk size required to use the memory efficient algorithm when uploading a block blob. Defaults to 4*1024*1024+1.
* **use_byte_buffer** (_bool_) – Use a byte buffer for block blob uploads. Defaults to False.
* **max_page_size** (_int_) – The maximum chunk size for uploading a page blob. Defaults to 4*1024*1024, or 4MB.
* **max_single_get_size** (_int_) – The maximum size for a blob to be downloaded in a single call, the exceeded part will be downloaded in chunks (could be parallel). Defaults to 32*1024*1024, or 32MB.
* **max_chunk_get_size** (_int_) – The maximum chunk size used for downloading a blob. Defaults to 4*1024*1024, or 4MB.
* **version_id** (_str_) – The version id parameter is an opaque DateTime value that, when present, specifies the version of the blob to operate on.
* **audience** (_str_) – The audience to use when requesting tokens for Azure Active Directory authentication. Only has an effect when credential is of type TokenCredential. The value could be https://storage.azure.com/ (default) or https://<account>.blob.core.windows.net.
Example:
Creating the BlobClient from a URL to a public blob (no auth needed).¶
from azure.storage.blob import BlobClient
blob_client = BlobClient.from_blob_url(blob_url="https://account.blob.core.windows.net/container/blob-name")
Creating the BlobClient from a SAS URL to a blob.¶
from azure.storage.blob import BlobClient
sas_url = "https://account.blob.core.windows.net/container/blob-name?sv=2015-04-05&st=2015-04-29T22%3A18%3A26Z&se=2015-04-30T02%3A23%3A26Z&sr=b&sp=rw&sip=168.1.5.60-168.1.5.70&spr=https&sig=Z%2FRHIX5Xcg0Mq2rqI3OlWTjEg2tYkboXr1P9ZUXDtkk%3D"
blob_client = BlobClient.from_blob_url(sas_url)
abort_copy(_copy_id : str | Dict[str, Any] | BlobProperties_, _** kwargs: Any_) → None[source]¶
Abort an ongoing copy operation.
This will leave a destination blob with zero length and full metadata. This
will raise an error if the copy operation has already ended.
Parameters:
**copy_id** (_str_ _or_ _BlobProperties_) – The copy operation to abort. This
can be either an ID string, or an instance of BlobProperties.
Return type:
None
Example:
Abort copying a blob from URL.¶
# Passing in copy id to abort copy operation
if props.copy.status != "success":
if copy_id is not None:
copied_blob.abort_copy(copy_id)
else:
print("copy_id was unexpectedly None, check if the operation completed successfully.")
# check copy status
props = copied_blob.get_blob_properties()
print(props.copy.status)
acquire_lease(_lease_duration : int = -1_, _lease_id : str | None = None_, _** kwargs: Any_) → BlobLeaseClient[source]¶
Requests a new lease.
If the blob does not have an active lease, the Blob Service creates a lease on
the blob and returns a new lease.
Parameters:
* **lease_duration** (_int_) – Specifies the duration of the lease, in seconds, or negative one (-1) for a lease that never expires. A non-infinite lease can be between 15 and 60 seconds. A lease duration cannot be changed using renew or change. Default is -1 (infinite lease).
* **lease_id** (_str_) – Proposed lease ID, in a GUID string format. The Blob Service returns 400 (Invalid request) if the proposed lease ID is not in the correct format.
Keyword Arguments:
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **etag** (_str_) – An ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **match_condition** (_MatchConditions_) – The match condition to use upon the etag.
* **if_tags_match_condition** (_str_) –
Specify a SQL where clause on blob tags to operate only on blob with a
matching value. eg. `"\"tagname\"='my tag'"`
Added in version 12.4.0.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
A BlobLeaseClient object.
Return type:
_BlobLeaseClient_
Example:
Acquiring a lease on a blob.¶
# Acquire a lease on the blob
lease = blob_client.acquire_lease()
# Delete blob by passing in the lease
blob_client.delete_blob(lease=lease)
append_block(_data : bytes | str | Iterable | IO_, _length : int | None = None_, _** kwargs: Any_) → Dict[str, str | datetime | int][source]¶
Commits a new block of data to the end of the existing append blob.
Parameters:
* **data** (_bytes_ _or_ _str_ _or_ _Iterable_) – Content of the block. This can be bytes, text, an iterable or a file-like object.
* **length** (_int_) – Size of the block in bytes.
Keyword Arguments:
* **validate_content** (_bool_) – If true, calculates an MD5 hash of the block content. The storage service checks the hash of the content that has arrived with the hash that was sent. This is primarily valuable for detecting bitflips on the wire if using http instead of https, as https (the default), will already validate. Note that this MD5 hash is not stored with the blob.
* **maxsize_condition** (_int_) – Optional conditional header. The max length in bytes permitted for the append blob. If the Append Block operation would cause the blob to exceed that limit or if the blob size is already greater than the value specified in this header, the request will fail with MaxBlobSizeConditionNotMet error (HTTP status code 412 - Precondition Failed).
* **appendpos_condition** (_int_) – Optional conditional header, used only for the Append Block operation. A number indicating the byte offset to compare. Append Block will succeed only if the append position is equal to this number. If it is not, the request will fail with the AppendPositionConditionNotMet error (HTTP status code 412 - Precondition Failed).
* **lease** (_BlobLeaseClient_ _or_ _str_) – Required if the blob has an active lease. Value can be a BlobLeaseClient object or the lease ID as a string.
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **etag** (_str_) – An ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **match_condition** (_MatchConditions_) – The match condition to use upon the etag.
* **if_tags_match_condition** (_str_) –
Specify a SQL where clause on blob tags to operate only on blob with a
matching value. eg. `"\"tagname\"='my tag'"`
Added in version 12.4.0.
* **encoding** (_str_) – Defaults to UTF-8.
* **cpk** (_CustomerProvidedEncryptionKey_) – Encrypts the data on the service-side with the given key. Use of customer-provided keys must be done over HTTPS. As the encryption key itself is provided in the request, a secure connection must be established to transfer the key.
* **encryption_scope** (_str_) –
A predefined encryption scope used to encrypt the data on the service. An
encryption scope can be created using the Management API and referenced here
by name. If a default encryption scope has been defined at the container, this
value will override it if the container-level scope is configured to allow
overrides. Otherwise an error will be raised.
Added in version 12.2.0.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
Blob-updated property dict (Etag, last modified, append offset, committed
block count).
Return type:
dict(str, Any)
append_block_from_url(_copy_source_url : str_, _source_offset : int | None = None_, _source_length : int | None = None_, _** kwargs: Any_) → Dict[str, str | datetime | int][source]¶
Creates a new block to be committed as part of a blob, where the contents are
read from a source url.
Parameters:
* **copy_source_url** (_str_) – The URL of the source data. It can point to any Azure Blob or File, that is either public or has a shared access signature attached.
* **source_offset** (_int_) – This indicates the start of the range of bytes (inclusive) that has to be taken from the copy source.
* **source_length** (_int_) – This indicates the end of the range of bytes that has to be taken from the copy source.
Keyword Arguments:
* **source_content_md5** (_bytearray_) – If given, the service will calculate the MD5 hash of the block content and compare against this value.
* **maxsize_condition** (_int_) – Optional conditional header. The max length in bytes permitted for the append blob. If the Append Block operation would cause the blob to exceed that limit or if the blob size is already greater than the value specified in this header, the request will fail with MaxBlobSizeConditionNotMet error (HTTP status code 412 - Precondition Failed).
* **appendpos_condition** (_int_) – Optional conditional header, used only for the Append Block operation. A number indicating the byte offset to compare. Append Block will succeed only if the append position is equal to this number. If it is not, the request will fail with the AppendPositionConditionNotMet error (HTTP status code 412 - Precondition Failed).
* **lease** (_BlobLeaseClient_ _or_ _str_) – Required if the blob has an active lease. Value can be a BlobLeaseClient object or the lease ID as a string.
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **etag** (_str_) – The destination ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **match_condition** (_MatchConditions_) – The destination match condition to use upon the etag.
* **if_tags_match_condition** (_str_) –
Specify a SQL where clause on blob tags to operate only on blob with a
matching value. eg. `"\"tagname\"='my tag'"`
Added in version 12.4.0.
* **source_if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the source resource has been modified since the specified time.
* **source_if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the source resource has not been modified since the specified date/time.
* **source_etag** (_str_) – The source ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **source_match_condition** (_MatchConditions_) – The source match condition to use upon the etag.
* **cpk** (_CustomerProvidedEncryptionKey_) – Encrypts the data on the service-side with the given key. Use of customer-provided keys must be done over HTTPS. As the encryption key itself is provided in the request, a secure connection must be established to transfer the key.
* **encryption_scope** (_str_) –
A predefined encryption scope used to encrypt the data on the service. An
encryption scope can be created using the Management API and referenced here
by name. If a default encryption scope has been defined at the container, this
value will override it if the container-level scope is configured to allow
overrides. Otherwise an error will be raised.
Added in version 12.2.0.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
* **source_authorization** (_str_) – Authenticate as a service principal using a client secret to access a source blob. Ensure “bearer ” is the prefix of the source_authorization string.
Returns:
Result after appending a new block.
Return type:
Dict[str, Union[str, datetime, int]]
clear_page(_offset : int_, _length : int_, _** kwargs: Any_) → Dict[str, str | datetime][source]¶
Clears a range of pages.
Parameters:
* **offset** (_int_) – Start of byte range to use for writing to a section of the blob. Pages must be aligned with 512-byte boundaries, the start offset must be a modulus of 512 and the length must be a modulus of 512.
* **length** (_int_) – Number of bytes to use for writing to a section of the blob. Pages must be aligned with 512-byte boundaries, the start offset must be a modulus of 512 and the length must be a modulus of 512.
Keyword Arguments:
* **lease** (_BlobLeaseClient_ _or_ _str_) – Required if the blob has an active lease. Value can be a BlobLeaseClient object or the lease ID as a string.
* **if_sequence_number_lte** (_int_) – If the blob’s sequence number is less than or equal to the specified value, the request proceeds; otherwise it fails.
* **if_sequence_number_lt** (_int_) – If the blob’s sequence number is less than the specified value, the request proceeds; otherwise it fails.
* **if_sequence_number_eq** (_int_) – If the blob’s sequence number is equal to the specified value, the request proceeds; otherwise it fails.
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **etag** (_str_) – An ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **match_condition** (_MatchConditions_) – The match condition to use upon the etag.
* **if_tags_match_condition** (_str_) –
Specify a SQL where clause on blob tags to operate only on blob with a
matching value. eg. `"\"tagname\"='my tag'"`
Added in version 12.4.0.
* **cpk** (_CustomerProvidedEncryptionKey_) – Encrypts the data on the service-side with the given key. Use of customer-provided keys must be done over HTTPS. As the encryption key itself is provided in the request, a secure connection must be established to transfer the key.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
Blob-updated property dict (Etag and last modified).
Return type:
dict(str, Any)
close()¶
This method is to close the sockets opened by the client. It need not be used
when using with a context manager.
commit_block_list(_block_list : List[BlobBlock]_, _content_settings : ContentSettings | None = None_, _metadata : Dict[str, str] | None = None_, _** kwargs: Any_) → Dict[str, str | datetime][source]¶
The Commit Block List operation writes a blob by specifying the list of block
IDs that make up the blob.
Parameters:
* **block_list** (_list_) – List of Blockblobs.
* **content_settings** (_ContentSettings_) – ContentSettings object used to set blob properties. Used to set content type, encoding, language, disposition, md5, and cache control.
* **metadata** (_dict_ _[__str_ _,__str_ _]_) – Name-value pairs associated with the blob as metadata.
Keyword Arguments:
* **tags** (_dict_ _(__str_ _,__str_ _)_) –
Name-value pairs associated with the blob as tag. Tags are case-sensitive. The
tag set may contain at most 10 tags. Tag keys must be between 1 and 128
characters, and tag values must be between 0 and 256 characters. Valid tag key
and value characters include: lowercase and uppercase letters, digits (0-9),
space (’ ‘), plus (+), minus (-), period (.), solidus (/), colon (:), equals
(=), underscore (_)
Added in version 12.4.0.
* **lease** (_BlobLeaseClient_ _or_ _str_) – Required if the blob has an active lease. Value can be a BlobLeaseClient object or the lease ID as a string.
* **immutability_policy** (_ImmutabilityPolicy_) –
Specifies the immutability policy of a blob, blob snapshot or blob version.
Added in version 12.10.0: This was introduced in API version ‘2020-10-02’.
* **legal_hold** (_bool_) –
Specified if a legal hold should be set on the blob.
Added in version 12.10.0: This was introduced in API version ‘2020-10-02’.
* **validate_content** (_bool_) – If true, calculates an MD5 hash of the page content. The storage service checks the hash of the content that has arrived with the hash that was sent. This is primarily valuable for detecting bitflips on the wire if using http instead of https, as https (the default), will already validate. Note that this MD5 hash is not stored with the blob.
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **etag** (_str_) – An ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **match_condition** (_MatchConditions_) – The match condition to use upon the etag.
* **if_tags_match_condition** (_str_) –
Specify a SQL where clause on blob tags to operate only on destination blob
with a matching value.
Added in version 12.4.0.
* **standard_blob_tier** (_StandardBlobTier_) – A standard blob tier value to set the blob to. For this version of the library, this is only applicable to block blobs on standard storage accounts.
* **cpk** (_CustomerProvidedEncryptionKey_) – Encrypts the data on the service-side with the given key. Use of customer-provided keys must be done over HTTPS. As the encryption key itself is provided in the request, a secure connection must be established to transfer the key.
* **encryption_scope** (_str_) –
A predefined encryption scope used to encrypt the data on the service. An
encryption scope can be created using the Management API and referenced here
by name. If a default encryption scope has been defined at the container, this
value will override it if the container-level scope is configured to allow
overrides. Otherwise an error will be raised.
Added in version 12.2.0.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
Blob-updated property dict (Etag and last modified).
Return type:
dict(str, Any)
create_append_blob(_content_settings : ContentSettings | None = None_, _metadata : Dict[str, str] | None = None_, _** kwargs: Any_) → Dict[str, str | datetime][source]¶
Creates a new Append Blob. This operation creates a new 0-length append blob.
The content of any existing blob is overwritten with the newly initialized
append blob. To add content to the append blob, call the `append_block()` or
`append_block_from_url()` method.
Parameters:
* **content_settings** (_ContentSettings_) – ContentSettings object used to set blob properties. Used to set content type, encoding, language, disposition, md5, and cache control.
* **metadata** (_dict_ _(__str_ _,__str_ _)_) – Name-value pairs associated with the blob as metadata.
Keyword Arguments:
* **tags** (_dict_ _(__str_ _,__str_ _)_) –
Name-value pairs associated with the blob as tag. Tags are case-sensitive. The
tag set may contain at most 10 tags. Tag keys must be between 1 and 128
characters, and tag values must be between 0 and 256 characters. Valid tag key
and value characters include: lowercase and uppercase letters, digits (0-9),
space (’ ‘), plus (+), minus (-), period (.), solidus (/), colon (:), equals
(=), underscore (_)
Added in version 12.4.0.
* **lease** (_BlobLeaseClient_ _or_ _str_) – Required if the blob has an active lease. Value can be a BlobLeaseClient object or the lease ID as a string.
* **immutability_policy** (_ImmutabilityPolicy_) –
Specifies the immutability policy of a blob, blob snapshot or blob version.
Added in version 12.10.0: This was introduced in API version ‘2020-10-02’.
* **legal_hold** (_bool_) –
Specified if a legal hold should be set on the blob.
Added in version 12.10.0: This was introduced in API version ‘2020-10-02’.
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **etag** (_str_) – An ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **match_condition** (_MatchConditions_) – The match condition to use upon the etag.
* **cpk** (_CustomerProvidedEncryptionKey_) – Encrypts the data on the service-side with the given key. Use of customer-provided keys must be done over HTTPS. As the encryption key itself is provided in the request, a secure connection must be established to transfer the key.
* **encryption_scope** (_str_) –
A predefined encryption scope used to encrypt the data on the service. An
encryption scope can be created using the Management API and referenced here
by name. If a default encryption scope has been defined at the container, this
value will override it if the container-level scope is configured to allow
overrides. Otherwise an error will be raised.
Added in version 12.2.0.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
Blob-updated property dict (Etag and last modified).
Return type:
dict[str, Any]
create_page_blob(_size : int_, _content_settings : ContentSettings | None = None_, _metadata : Dict[str, str] | None = None_, _premium_page_blob_tier : str | PremiumPageBlobTier | None = None_, _** kwargs: Any_) → Dict[str, str | datetime][source]¶
Creates a new Page Blob of the specified size.
Parameters:
* **size** (_int_) – This specifies the maximum size for the page blob, up to 1 TB. The page blob size must be aligned to a 512-byte boundary.
* **content_settings** (_ContentSettings_) – ContentSettings object used to set blob properties. Used to set content type, encoding, language, disposition, md5, and cache control.
* **metadata** (_dict_ _(__str_ _,__str_ _)_) – Name-value pairs associated with the blob as metadata.
* **premium_page_blob_tier** (_PremiumPageBlobTier_) – A page blob tier value to set the blob to. The tier correlates to the size of the blob and number of allowed IOPS. This is only applicable to page blobs on premium storage accounts.
Keyword Arguments:
* **tags** (_dict_ _(__str_ _,__str_ _)_) –
Name-value pairs associated with the blob as tag. Tags are case-sensitive. The
tag set may contain at most 10 tags. Tag keys must be between 1 and 128
characters, and tag values must be between 0 and 256 characters. Valid tag key
and value characters include: lowercase and uppercase letters, digits (0-9),
space (’ ‘), plus (+), minus (-), period (.), solidus (/), colon (:), equals
(=), underscore (_)
Added in version 12.4.0.
* **sequence_number** (_int_) – Only for Page blobs. The sequence number is a user-controlled value that you can use to track requests. The value of the sequence number must be between 0 and 2^63 - 1.The default value is 0.
* **lease** (_BlobLeaseClient_ _or_ _str_) – Required if the blob has an active lease. Value can be a BlobLeaseClient object or the lease ID as a string.
* **immutability_policy** (_ImmutabilityPolicy_) –
Specifies the immutability policy of a blob, blob snapshot or blob version.
Added in version 12.10.0: This was introduced in API version ‘2020-10-02’.
* **legal_hold** (_bool_) –
Specified if a legal hold should be set on the blob.
Added in version 12.10.0: This was introduced in API version ‘2020-10-02’.
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **etag** (_str_) – An ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **match_condition** (_MatchConditions_) – The match condition to use upon the etag.
* **cpk** (_CustomerProvidedEncryptionKey_) – Encrypts the data on the service-side with the given key. Use of customer-provided keys must be done over HTTPS. As the encryption key itself is provided in the request, a secure connection must be established to transfer the key.
* **encryption_scope** (_str_) –
A predefined encryption scope used to encrypt the data on the service. An
encryption scope can be created using the Management API and referenced here
by name. If a default encryption scope has been defined at the container, this
value will override it if the container-level scope is configured to allow
overrides. Otherwise an error will be raised.
Added in version 12.2.0.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
Blob-updated property dict (Etag and last modified).
Return type:
dict[str, Any]
create_snapshot(_metadata : Dict[str, str] | None = None_, _** kwargs: Any_) → Dict[str, str | datetime][source]¶
Creates a snapshot of the blob.
A snapshot is a read-only version of a blob that’s taken at a point in time.
It can be read, copied, or deleted, but not modified. Snapshots provide a way
to back up a blob as it appears at a moment in time.
A snapshot of a blob has the same name as the base blob from which the
snapshot is taken, with a DateTime value appended to indicate the time at
which the snapshot was taken.
Parameters:
**metadata** (_dict_ _(__str_ _,__str_ _)_) – Name-value pairs associated with
the blob as metadata.
Keyword Arguments:
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **etag** (_str_) – An ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **match_condition** (_MatchConditions_) – The match condition to use upon the etag.
* **if_tags_match_condition** (_str_) –
Specify a SQL where clause on blob tags to operate only on destination blob
with a matching value.
Added in version 12.4.0.
* **lease** (_BlobLeaseClient_ _or_ _str_) – Required if the blob has an active lease. Value can be a BlobLeaseClient object or the lease ID as a string.
* **cpk** (_CustomerProvidedEncryptionKey_) – Encrypts the data on the service-side with the given key. Use of customer-provided keys must be done over HTTPS. As the encryption key itself is provided in the request, a secure connection must be established to transfer the key.
* **encryption_scope** (_str_) –
A predefined encryption scope used to encrypt the data on the service. An
encryption scope can be created using the Management API and referenced here
by name. If a default encryption scope has been defined at the container, this
value will override it if the container-level scope is configured to allow
overrides. Otherwise an error will be raised.
Added in version 12.2.0.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
Blob-updated property dict (Snapshot ID, Etag, and last modified).
Return type:
dict[str, Any]
Example:
Create a snapshot of the blob.¶
# Create a read-only snapshot of the blob at this point in time
snapshot_blob = blob_client.create_snapshot()
# Get the snapshot ID
print(snapshot_blob.get('snapshot'))
delete_blob(_delete_snapshots : str | None = None_, _** kwargs: Any_) → None[source]¶
Marks the specified blob for deletion.
The blob is later deleted during garbage collection. Note that in order to
delete a blob, you must delete all of its snapshots. You can delete both at
the same time with the delete_blob() operation.
If a delete retention policy is enabled for the service, then this operation
soft deletes the blob and retains the blob for a specified number of days.
After the specified number of days, the blob’s data is removed from the
service during garbage collection. Soft deleted blob is accessible through
`list_blobs()` specifying include=[‘deleted’] option. Soft-deleted blob can be
restored using `undelete()` operation.
Parameters:
**delete_snapshots** (_Optional_ _[__str_ _]_) –
Required if the blob has associated snapshots. Values include:
* ”only”: Deletes only the blobs snapshots.
* ”include”: Deletes the blob along with all snapshots.
Keyword Arguments:
* **version_id** (_Optional_ _[__str_ _]_) –
The version id parameter is an opaque DateTime value that, when present,
specifies the version of the blob to delete.
Added in version 12.4.0.
This keyword argument was introduced in API version ‘2019-12-12’.
* **lease** (_BlobLeaseClient_ _or_ _str_) – Required if the blob has an active lease. If specified, delete_blob only succeeds if the blob’s lease is active and matches this ID. Value can be a BlobLeaseClient object or the lease ID as a string.
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **etag** (_str_) – An ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **match_condition** (_MatchConditions_) – The match condition to use upon the etag.
* **if_tags_match_condition** (_str_) –
Specify a SQL where clause on blob tags to operate only on blob with a
matching value. eg. `"\"tagname\"='my tag'"`
Added in version 12.4.0.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Return type:
None
Example:
Delete a blob.¶
blob_client.delete_blob()
delete_immutability_policy(_** kwargs: Any_) → None[source]¶
The Delete Immutability Policy operation deletes the immutability policy on
the blob.
Added in version 12.10.0: This operation was introduced in API version
‘2020-10-02’.
Keyword Arguments:
**timeout** (_int_) – Sets the server-side timeout for the operation in
seconds. For more details see
https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-
blob-service-operations. This value is not tracked or validated on the client.
To configure client-side network timesouts see here.
Returns:
Key value pairs of blob tags.
Return type:
Dict[str, str]
download_blob(_offset : int | None = None_, _length : int | None = None_, _*_ , _encoding : str_, _** kwargs: Any_) → StorageStreamDownloader[str][source]¶
download_blob(_offset : int | None = None_, _length : int | None = None_, _*_ , _encoding : None = None_, _** kwargs: Any_) → StorageStreamDownloader[bytes]
Downloads a blob to the StorageStreamDownloader. The readall() method must be
used to read all the content or readinto() must be used to download the blob
into a stream. Using chunks() returns an iterator which allows the user to
iterate over the content in chunks.
Parameters:
* **offset** (_int_) – Start of byte range to use for downloading a section of the blob. Must be set if length is provided.
* **length** (_int_) – Number of bytes to read from the stream. This is optional, but should be supplied for optimal performance.
Keyword Arguments:
* **version_id** (_str_) –
The version id parameter is an opaque DateTime value that, when present,
specifies the version of the blob to download.
Added in version 12.4.0.
This keyword argument was introduced in API version ‘2019-12-12’.
* **validate_content** (_bool_) – If true, calculates an MD5 hash for each chunk of the blob. The storage service checks the hash of the content that has arrived with the hash that was sent. This is primarily valuable for detecting bitflips on the wire if using http instead of https, as https (the default), will already validate. Note that this MD5 hash is not stored with the blob. Also note that if enabled, the memory-efficient upload algorithm will not be used because computing the MD5 hash requires buffering entire blocks, and doing so defeats the purpose of the memory-efficient algorithm.
* **lease** (_BlobLeaseClient_ _or_ _str_) – Required if the blob has an active lease. If specified, download_blob only succeeds if the blob’s lease is active and matches this ID. Value can be a BlobLeaseClient object or the lease ID as a string.
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **etag** (_str_) – An ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **match_condition** (_MatchConditions_) – The match condition to use upon the etag.
* **if_tags_match_condition** (_str_) –
Specify a SQL where clause on blob tags to operate only on blob with a
matching value. eg. `"\"tagname\"='my tag'"`
Added in version 12.4.0.
* **cpk** (_CustomerProvidedEncryptionKey_) – Encrypts the data on the service-side with the given key. Use of customer-provided keys must be done over HTTPS. As the encryption key itself is provided in the request, a secure connection must be established to transfer the key.
* **max_concurrency** (_int_) – The number of parallel connections with which to download.
* **encoding** (_Optional_ _[__str_ _]_) – Encoding to decode the downloaded bytes. Default is None, i.e. no decoding.
* **progress_hook** (_Callable_ _[__[__int_ _,__int_ _]__,__None_ _]_) – A callback to track the progress of a long running download. The signature is function(current: int, total: int) where current is the number of bytes transferred so far, and total is the total size of the download.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here. This method may make multiple calls to the service and the timeout will apply to each call individually. multiple calls to the Azure service and the timeout will apply to each call individually.
Returns:
A streaming object (StorageStreamDownloader)
Return type:
_StorageStreamDownloader_
Example:
Download a blob.¶
with open(DEST_FILE, "wb") as my_blob:
download_stream = blob_client.download_blob()
my_blob.write(download_stream.readall())
exists(_** kwargs: Any_) → bool[source]¶
Returns True if a blob exists with the defined parameters, and returns False
otherwise.
Keyword Arguments:
* **version_id** (_str_) – The version id parameter is an opaque DateTime value that, when present, specifies the version of the blob to check if it exists.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
boolean
Return type:
bool
_classmethod _from_blob_url(_blob_url : str_, _credential : str | Dict[str, str] | AzureNamedKeyCredential | AzureSasCredential | TokenCredential | None = None_, _snapshot : str | Dict[str, Any] | None = None_, _** kwargs: Any_) → Self[source]¶
Create BlobClient from a blob url. This doesn’t support customized blob url
with ‘/’ in blob name.
Parameters:
* **blob_url** (_str_) – The full endpoint URL to the Blob, including SAS token and snapshot if used. This could be either the primary endpoint, or the secondary endpoint depending on the current location_mode.
* **credential** (_AzureNamedKeyCredential_ _or_ _AzureSasCredential_ _or_ _TokenCredential_ _or_ _str_ _or_ _dict_ _[__str_ _,__str_ _] or_ _None_) – The credentials with which to authenticate. This is optional if the account URL already has a SAS token, or the connection string already has shared access key values. The value can be a SAS token string, an instance of a AzureSasCredential or AzureNamedKeyCredential from azure.core.credentials, an account shared access key, or an instance of a TokenCredentials class from azure.identity. If the resource URI already contains a SAS token, this will be ignored in favor of an explicit credential \- except in the case of AzureSasCredential, where the conflicting SAS tokens will raise a ValueError. If using an instance of AzureNamedKeyCredential, “name” should be the storage account name, and “key” should be the storage account key.
* **snapshot** (_str_) – The optional blob snapshot on which to operate. This can be the snapshot ID string or the response returned from `create_snapshot()`. If specified, this will override the snapshot in the url.
Keyword Arguments:
* **version_id** (_str_) – The version id parameter is an opaque DateTime value that, when present, specifies the version of the blob to operate on.
* **audience** (_str_) – The audience to use when requesting tokens for Azure Active Directory authentication. Only has an effect when credential is of type TokenCredential. The value could be https://storage.azure.com/ (default) or https://<account>.blob.core.windows.net.
Returns:
A Blob client.
Return type:
_BlobClient_
_classmethod _from_connection_string(_conn_str : str_, _container_name : str_, _blob_name : str_, _snapshot : str | Dict[str, Any] | None = None_, _credential : str | Dict[str, str] | AzureNamedKeyCredential | AzureSasCredential | TokenCredential | None = None_, _** kwargs: Any_) → Self[source]¶
Create BlobClient from a Connection String.
Parameters:
* **conn_str** (_str_) – A connection string to an Azure Storage account.
* **container_name** (_str_) – The container name for the blob.
* **blob_name** (_str_) – The name of the blob with which to interact.
* **snapshot** (_str_) – The optional blob snapshot on which to operate. This can be the snapshot ID string or the response returned from `create_snapshot()`.
* **credential** (_AzureNamedKeyCredential_ _or_ _AzureSasCredential_ _or_ _TokenCredential_ _or_ _str_ _or_ _dict_ _[__str_ _,__str_ _] or_ _None_) – The credentials with which to authenticate. This is optional if the account URL already has a SAS token, or the connection string already has shared access key values. The value can be a SAS token string, an instance of a AzureSasCredential or AzureNamedKeyCredential from azure.core.credentials, an account shared access key, or an instance of a TokenCredentials class from azure.identity. Credentials provided here will take precedence over those in the connection string. If using an instance of AzureNamedKeyCredential, “name” should be the storage account name, and “key” should be the storage account key.
Keyword Arguments:
* **version_id** (_str_) – The version id parameter is an opaque DateTime value that, when present, specifies the version of the blob to operate on.
* **audience** (_str_) – The audience to use when requesting tokens for Azure Active Directory authentication. Only has an effect when credential is of type TokenCredential. The value could be https://storage.azure.com/ (default) or https://<account>.blob.core.windows.net.
Returns:
A Blob client.
Return type:
_BlobClient_
Example:
Creating the BlobClient from a connection string.¶
from azure.storage.blob import BlobClient
blob_client = BlobClient.from_connection_string(
self.connection_string, container_name="mycontainer", blob_name="blobname.txt")
get_account_information(_** kwargs: Any_) → Dict[str, str][source]¶
Gets information related to the storage account in which the blob resides.
The information can also be retrieved if the user has a SAS to a container or
blob. The keys in the returned dictionary include ‘sku_name’ and
‘account_kind’.
Returns:
A dict of account information (SKU and account type).
Return type:
dict(str, str)
get_blob_properties(_** kwargs: Any_) → BlobProperties[source]¶
Returns all user-defined metadata, standard HTTP properties, and system
properties for the blob. It does not return the content of the blob.
Keyword Arguments:
* **lease** (_BlobLeaseClient_ _or_ _str_) – Required if the blob has an active lease. Value can be a BlobLeaseClient object or the lease ID as a string.
* **version_id** (_str_) –
The version id parameter is an opaque DateTime value that, when present,
specifies the version of the blob to get properties.
Added in version 12.4.0.
This keyword argument was introduced in API version ‘2019-12-12’.
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **etag** (_str_) – An ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **match_condition** (_MatchConditions_) – The match condition to use upon the etag.
* **if_tags_match_condition** (_str_) –
Specify a SQL where clause on blob tags to operate only on blob with a
matching value. eg. `"\"tagname\"='my tag'"`
Added in version 12.4.0.
* **cpk** (_CustomerProvidedEncryptionKey_) – Encrypts the data on the service-side with the given key. Use of customer-provided keys must be done over HTTPS. As the encryption key itself is provided in the request, a secure connection must be established to transfer the key.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
BlobProperties
Return type:
_BlobProperties_
Example:
Getting the properties for a blob.¶
properties = blob_client.get_blob_properties()
get_blob_tags(_** kwargs: Any_) → Dict[str, str][source]¶
The Get Tags operation enables users to get tags on a blob or specific blob
version, or snapshot.
Added in version 12.4.0: This operation was introduced in API version
‘2019-12-12’.
Keyword Arguments:
* **version_id** (_Optional_ _[__str_ _]_) – The version id parameter is an opaque DateTime value that, when present, specifies the version of the blob to add tags to.
* **if_tags_match_condition** (_str_) – Specify a SQL where clause on blob tags to operate only on destination blob with a matching value. eg. `"\"tagname\"='my tag'"`
* **lease** (_BlobLeaseClient_ _or_ _str_) – Required if the blob has an active lease. Value can be a BlobLeaseClient object or the lease ID as a string.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
Key value pairs of blob tags.
Return type:
Dict[str, str]
get_block_list(_block_list_type : str = 'committed'_, _** kwargs: Any_) →
Tuple[List[BlobBlock], List[BlobBlock]][source]¶
The Get Block List operation retrieves the list of blocks that have been
uploaded as part of a block blob.
Parameters:
**block_list_type** (_str_) – Specifies whether to return the list of
committed blocks, the list of uncommitted blocks, or both lists together.
Possible values include: ‘committed’, ‘uncommitted’, ‘all’
Keyword Arguments:
* **lease** (_BlobLeaseClient_ _or_ _str_) – Required if the blob has an active lease. Value can be a BlobLeaseClient object or the lease ID as a string.
* **if_tags_match_condition** (_str_) –
Specify a SQL where clause on blob tags to operate only on destination blob
with a matching value.
Added in version 12.4.0.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
A tuple of two lists - committed and uncommitted blocks
Return type:
Tuple[List[BlobBlock], List[BlobBlock]]
get_page_range_diff_for_managed_disk(_previous_snapshot_url : str_, _offset : int | None = None_, _length : int | None = None_, _** kwargs: Any_) → Tuple[List[Dict[str, int]], List[Dict[str, int]]][source]¶
Returns the list of valid page ranges for a managed disk or snapshot.
Note
This operation is only available for managed disk accounts.
Added in version 12.2.0: This operation was introduced in API version
‘2019-07-07’.
Parameters:
* **previous_snapshot_url** (_str_) – Specifies the URL of a previous snapshot of the managed disk. The response will only contain pages that were changed between the target blob and its previous snapshot.
* **offset** (_int_) – Start of byte range to use for getting valid page ranges. If no length is given, all bytes after the offset will be searched. Pages must be aligned with 512-byte boundaries, the start offset must be a modulus of 512 and the length must be a modulus of 512.
* **length** (_int_) – Number of bytes to use for getting valid page ranges. If length is given, offset must be provided. This range will return valid page ranges from the offset start up to the specified length. Pages must be aligned with 512-byte boundaries, the start offset must be a modulus of 512 and the length must be a modulus of 512.
Keyword Arguments:
* **lease** (_BlobLeaseClient_ _or_ _str_) – Required if the blob has an active lease. Value can be a BlobLeaseClient object or the lease ID as a string.
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **etag** (_str_) – An ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **match_condition** (_MatchConditions_) – The match condition to use upon the etag.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
A tuple of two lists of page ranges as dictionaries with ‘start’ and ‘end’
keys. The first element are filled page ranges, the 2nd element is cleared
page ranges.
Return type:
tuple(list(dict(str, str), list(dict(str, str))
get_page_ranges(_offset : int | None = None_, _length : int | None = None_, _previous_snapshot_diff : str | Dict[str, Any] | None = None_, _** kwargs: Any_) → Tuple[List[Dict[str, int]], List[Dict[str, int]]][source]¶
DEPRECATED: Returns the list of valid page ranges for a Page Blob or snapshot
of a page blob.
Parameters:
* **offset** (_int_) – Start of byte range to use for getting valid page ranges. If no length is given, all bytes after the offset will be searched. Pages must be aligned with 512-byte boundaries, the start offset must be a modulus of 512 and the length must be a modulus of 512.
* **length** (_int_) – Number of bytes to use for getting valid page ranges. If length is given, offset must be provided. This range will return valid page ranges from the offset start up to the specified length. Pages must be aligned with 512-byte boundaries, the start offset must be a modulus of 512 and the length must be a modulus of 512.
* **previous_snapshot_diff** (_str_) – The snapshot diff parameter that contains an opaque DateTime value that specifies a previous blob snapshot to be compared against a more recent snapshot or the current blob.
Keyword Arguments:
* **lease** (_BlobLeaseClient_ _or_ _str_) – Required if the blob has an active lease. Value can be a BlobLeaseClient object or the lease ID as a string.
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **etag** (_str_) – An ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **match_condition** (_MatchConditions_) – The match condition to use upon the etag.
* **if_tags_match_condition** (_str_) –
Specify a SQL where clause on blob tags to operate only on blob with a
matching value. eg. `"\"tagname\"='my tag'"`
Added in version 12.4.0.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
A tuple of two lists of page ranges as dictionaries with ‘start’ and ‘end’
keys. The first element are filled page ranges, the 2nd element is cleared
page ranges.
Return type:
tuple(list(dict(str, str), list(dict(str, str))
list_page_ranges(_*_ , _offset : int | None = None_, _length : int | None = None_, _previous_snapshot : str | Dict[str, Any] | None = None_, _** kwargs: Any_) → ItemPaged[PageRange][source]¶
Returns the list of valid page ranges for a Page Blob or snapshot of a page
blob. If previous_snapshot is specified, the result will be a diff of changes
between the target blob and the previous snapshot.
Keyword Arguments:
* **offset** (_int_) – Start of byte range to use for getting valid page ranges. If no length is given, all bytes after the offset will be searched. Pages must be aligned with 512-byte boundaries, the start offset must be a modulus of 512 and the length must be a modulus of 512.
* **length** (_int_) – Number of bytes to use for getting valid page ranges. If length is given, offset must be provided. This range will return valid page ranges from the offset start up to the specified length. Pages must be aligned with 512-byte boundaries, the start offset must be a modulus of 512 and the length must be a modulus of 512.
* **previous_snapshot** (_str_ _or_ _Dict_ _[__str_ _,__Any_ _]_) – A snapshot value that specifies that the response will contain only pages that were changed between target blob and previous snapshot. Changed pages include both updated and cleared pages. The target blob may be a snapshot, as long as the snapshot specified by previous_snapshot is the older of the two.
* **lease** (_BlobLeaseClient_ _or_ _str_) – Required if the blob has an active lease. Value can be a BlobLeaseClient object or the lease ID as a string.
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **etag** (_str_) – An ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **match_condition** (_MatchConditions_) – The match condition to use upon the etag.
* **if_tags_match_condition** (_str_) –
Specify a SQL where clause on blob tags to operate only on blob with a
matching value. eg. `"\"tagname\"='my tag'"`
Added in version 12.4.0.
* **results_per_page** (_int_) – The maximum number of page ranges to retrieve per API call.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
An iterable (auto-paging) of PageRange.
Return type:
_ItemPaged_[_PageRange_]
query_blob(_query_expression : str_, _** kwargs: Any_) →
BlobQueryReader[source]¶
Enables users to select/project on blob/or blob snapshot data by providing
simple query expressions. This operations returns a BlobQueryReader, users
need to use readall() or readinto() to get query data.
Parameters:
**query_expression** (_str_) – Required. a query statement. For more details
see https://learn.microsoft.com/azure/storage/blobs/query-acceleration-sql-
reference.
Keyword Arguments:
* **on_error** (_Callable_ _[__BlobQueryError_ _]_) – A function to be called on any processing errors returned by the service.
* **blob_format** (_DelimitedTextDialect_ _or_ _DelimitedJsonDialect_ _or_ _QuickQueryDialect_ _or_ _str_) –
Optional. Defines the serialization of the data currently stored in the blob.
The default is to treat the blob data as CSV data formatted in the default
dialect. This can be overridden with a custom DelimitedTextDialect, or
DelimitedJsonDialect or “ParquetDialect” (passed as a string or enum). These
dialects can be passed through their respective classes, the QuickQueryDialect
enum or as a string
Note
”ParquetDialect” is in preview, so some features may not work as intended.
* **output_format** (_DelimitedTextDialect_ _or_ _DelimitedJsonDialect_ _or_ _List_ _[__ArrowDialect_ _] or_ _QuickQueryDialect_ _or_ _str_) – Optional. Defines the output serialization for the data stream. By default the data will be returned as it is represented in the blob (Parquet formats default to DelimitedTextDialect). By providing an output format, the blob data will be reformatted according to that profile. This value can be a DelimitedTextDialect or a DelimitedJsonDialect or ArrowDialect. These dialects can be passed through their respective classes, the QuickQueryDialect enum or as a string
* **lease** (_BlobLeaseClient_ _or_ _str_) – Required if the blob has an active lease. Value can be a BlobLeaseClient object or the lease ID as a string.
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **etag** (_str_) – An ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **match_condition** (_MatchConditions_) – The match condition to use upon the etag.
* **if_tags_match_condition** (_str_) –
Specify a SQL where clause on blob tags to operate only on blob with a
matching value. eg. `"\"tagname\"='my tag'"`
Added in version 12.4.0.
* **cpk** (_CustomerProvidedEncryptionKey_) – Encrypts the data on the service-side with the given key. Use of customer-provided keys must be done over HTTPS. As the encryption key itself is provided in the request, a secure connection must be established to transfer the key.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
A streaming object (BlobQueryReader)
Return type:
_BlobQueryReader_
Example:
select/project on blob/or blob snapshot data by providing simple query
expressions.¶
errors = []
def on_error(error):
errors.append(error)
# upload the csv file
blob_client = blob_service_client.get_blob_client(container_name, "csvfile")
with open("./sample-blobs/quick_query.csv", "rb") as stream:
blob_client.upload_blob(stream, overwrite=True)
# select the second column of the csv file
query_expression = "SELECT _2 from BlobStorage"
input_format = DelimitedTextDialect(delimiter=',', quotechar='"', lineterminator='\n', escapechar="", has_header=False)
output_format = DelimitedJsonDialect(delimiter='\n')
reader = blob_client.query_blob(query_expression, on_error=on_error, blob_format=input_format, output_format=output_format)
content = reader.readall()
resize_blob(_size : int_, _** kwargs: Any_) → Dict[str, str | datetime][source]¶
Resizes a page blob to the specified size.
If the specified value is less than the current size of the blob, then all
pages above the specified value are cleared.
Parameters:
**size** (_int_) – Size used to resize blob. Maximum size for a page blob is
up to 1 TB. The page blob size must be aligned to a 512-byte boundary.
Keyword Arguments:
* **lease** (_BlobLeaseClient_ _or_ _str_) – Required if the blob has an active lease. Value can be a BlobLeaseClient object or the lease ID as a string.
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **etag** (_str_) – An ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **match_condition** (_MatchConditions_) – The match condition to use upon the etag.
* **if_tags_match_condition** (_str_) –
Specify a SQL where clause on blob tags to operate only on blob with a
matching value. eg. `"\"tagname\"='my tag'"`
Added in version 12.4.0.
* **premium_page_blob_tier** (_PremiumPageBlobTier_) – A page blob tier value to set the blob to. The tier correlates to the size of the blob and number of allowed IOPS. This is only applicable to page blobs on premium storage accounts.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
Blob-updated property dict (Etag and last modified).
Return type:
dict(str, Any)
seal_append_blob(_** kwargs: Any_) → Dict[str, str | datetime | int][source]¶
The Seal operation seals the Append Blob to make it read-only.
> Added in version 12.4.0.
Keyword Arguments:
* **appendpos_condition** (_int_) – Optional conditional header, used only for the Append Block operation. A number indicating the byte offset to compare. Append Block will succeed only if the append position is equal to this number. If it is not, the request will fail with the AppendPositionConditionNotMet error (HTTP status code 412 - Precondition Failed).
* **lease** (_BlobLeaseClient_ _or_ _str_) – Required if the blob has an active lease. Value can be a BlobLeaseClient object or the lease ID as a string.
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **etag** (_str_) – An ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **match_condition** (_MatchConditions_) – The match condition to use upon the etag.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
Blob-updated property dict (Etag, last modified, append offset, committed
block count).
Return type:
dict(str, Any)
set_blob_metadata(_metadata : Dict[str, str] | None = None_, _** kwargs: Any_) → Dict[str, str | datetime][source]¶
Sets user-defined metadata for the blob as one or more name-value pairs.
Parameters:
**metadata** (_dict_ _(__str_ _,__str_ _)_) – Dict containing name and value
pairs. Each call to this operation replaces all existing metadata attached to
the blob. To remove all metadata from the blob, call this operation with no
metadata headers.
Keyword Arguments:
* **lease** (_BlobLeaseClient_ _or_ _str_) – Required if the blob has an active lease. Value can be a BlobLeaseClient object or the lease ID as a string.
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **etag** (_str_) – An ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **match_condition** (_MatchConditions_) – The match condition to use upon the etag.
* **if_tags_match_condition** (_str_) –
Specify a SQL where clause on blob tags to operate only on blob with a
matching value. eg. `"\"tagname\"='my tag'"`
Added in version 12.4.0.
* **cpk** (_CustomerProvidedEncryptionKey_) – Encrypts the data on the service-side with the given key. Use of customer-provided keys must be done over HTTPS. As the encryption key itself is provided in the request, a secure connection must be established to transfer the key.
* **encryption_scope** (_str_) –
A predefined encryption scope used to encrypt the data on the service. An
encryption scope can be created using the Management API and referenced here
by name. If a default encryption scope has been defined at the container, this
value will override it if the container-level scope is configured to allow
overrides. Otherwise an error will be raised.
Added in version 12.2.0.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
Blob-updated property dict (Etag and last modified)
Return type:
Dict[str, Union[str, datetime]]
set_blob_tags(_tags : Dict[str, str] | None = None_, _** kwargs: Any_) → Dict[str, Any][source]¶
The Set Tags operation enables users to set tags on a blob or specific blob
version, but not snapshot.
Each call to this operation replaces all existing tags attached to the blob.
To remove all tags from the blob, call this operation with no tags set.
Added in version 12.4.0: This operation was introduced in API version
‘2019-12-12’.
Parameters:
**tags** (_dict_ _(__str_ _,__str_ _)_) – Name-value pairs associated with the
blob as tag. Tags are case-sensitive. The tag set may contain at most 10 tags.
Tag keys must be between 1 and 128 characters, and tag values must be between
0 and 256 characters. Valid tag key and value characters include: lowercase
and uppercase letters, digits (0-9), space (’ ‘), plus (+), minus (-), period
(.), solidus (/), colon (:), equals (=), underscore (_)
Keyword Arguments:
* **version_id** (_str_) – The version id parameter is an opaque DateTime value that, when present, specifies the version of the blob to add tags to.
* **validate_content** (_bool_) – If true, calculates an MD5 hash of the tags content. The storage service checks the hash of the content that has arrived with the hash that was sent. This is primarily valuable for detecting bitflips on the wire if using http instead of https, as https (the default), will already validate. Note that this MD5 hash is not stored with the blob.
* **if_tags_match_condition** (_str_) – Specify a SQL where clause on blob tags to operate only on destination blob with a matching value. eg. `"\"tagname\"='my tag'"`
* **lease** (_BlobLeaseClient_ _or_ _str_) – Required if the blob has an active lease. Value can be a BlobLeaseClient object or the lease ID as a string.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
Blob-updated property dict (Etag and last modified)
Return type:
Dict[str, Any]
set_http_headers(_content_settings : ContentSettings | None = None_, _** kwargs: Any_) → Dict[str, Any][source]¶
Sets system properties on the blob.
If one property is set for the content_settings, all properties will be
overridden.
Parameters:
**content_settings** (_ContentSettings_) – ContentSettings object used to set
blob properties. Used to set content type, encoding, language, disposition,
md5, and cache control.
Keyword Arguments:
* **lease** (_BlobLeaseClient_ _or_ _str_) – Required if the blob has an active lease. Value can be a BlobLeaseClient object or the lease ID as a string.
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **etag** (_str_) – An ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **match_condition** (_MatchConditions_) – The match condition to use upon the etag.
* **if_tags_match_condition** (_str_) –
Specify a SQL where clause on blob tags to operate only on blob with a
matching value. eg. `"\"tagname\"='my tag'"`
Added in version 12.4.0.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
Blob-updated property dict (Etag and last modified)
Return type:
Dict[str, Any]
set_immutability_policy(_immutability_policy : ImmutabilityPolicy_, _**
kwargs: Any_) → Dict[str, str][source]¶
The Set Immutability Policy operation sets the immutability policy on the
blob.
Added in version 12.10.0: This operation was introduced in API version
‘2020-10-02’.
Parameters:
**immutability_policy** (_ImmutabilityPolicy_) –
Specifies the immutability policy of a blob, blob snapshot or blob version.
Added in version 12.10.0: This was introduced in API version ‘2020-10-02’.
Keyword Arguments:
**timeout** (_int_) – Sets the server-side timeout for the operation in
seconds. For more details see
https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-
blob-service-operations. This value is not tracked or validated on the client.
To configure client-side network timesouts see here.
Returns:
Key value pairs of blob tags.
Return type:
Dict[str, str]
set_legal_hold(_legal_hold : bool_, _** kwargs: Any_) → Dict[str, str | datetime | bool][source]¶
The Set Legal Hold operation sets a legal hold on the blob.
Added in version 12.10.0: This operation was introduced in API version
‘2020-10-02’.
Parameters:
**legal_hold** (_bool_) – Specified if a legal hold should be set on the blob.
Keyword Arguments:
**timeout** (_int_) – Sets the server-side timeout for the operation in
seconds. For more details see
https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-
blob-service-operations. This value is not tracked or validated on the client.
To configure client-side network timesouts see here.
Returns:
Key value pairs of blob tags.
Return type:
Dict[str, Union[str, datetime, bool]]
set_premium_page_blob_tier(_premium_page_blob_tier : PremiumPageBlobTier_, _**
kwargs: Any_) → None[source]¶
Sets the page blob tiers on the blob. This API is only supported for page
blobs on premium accounts.
Parameters:
**premium_page_blob_tier** (_PremiumPageBlobTier_) – A page blob tier value to
set the blob to. The tier correlates to the size of the blob and number of
allowed IOPS. This is only applicable to page blobs on premium storage
accounts.
Keyword Arguments:
* **if_tags_match_condition** (_str_) –
Specify a SQL where clause on blob tags to operate only on blob with a
matching value. eg. `"\"tagname\"='my tag'"`
Added in version 12.4.0.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
* **lease** (_BlobLeaseClient_ _or_ _str_) – Required if the blob has an active lease. Value can be a BlobLeaseClient object or the lease ID as a string.
Return type:
None
set_sequence_number(_sequence_number_action : str | SequenceNumberAction_, _sequence_number : str | None = None_, _** kwargs: Any_) → Dict[str, str | datetime][source]¶
Sets the blob sequence number.
Parameters:
* **sequence_number_action** (_str_) – This property indicates how the service should modify the blob’s sequence number. See `SequenceNumberAction` for more information.
* **sequence_number** (_str_) – This property sets the blob’s sequence number. The sequence number is a user-controlled property that you can use to track requests and manage concurrency issues.
Keyword Arguments:
* **lease** (_BlobLeaseClient_ _or_ _str_) – Required if the blob has an active lease. Value can be a BlobLeaseClient object or the lease ID as a string.
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **etag** (_str_) – An ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **match_condition** (_MatchConditions_) – The match condition to use upon the etag.
* **if_tags_match_condition** (_str_) –
Specify a SQL where clause on blob tags to operate only on blob with a
matching value. eg. `"\"tagname\"='my tag'"`
Added in version 12.4.0.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
Blob-updated property dict (Etag and last modified).
Return type:
dict(str, Any)
set_standard_blob_tier(_standard_blob_tier : str | StandardBlobTier_, _** kwargs: Any_) → None[source]¶
This operation sets the tier on a block blob.
A block blob’s tier determines Hot/Cool/Archive storage type. This operation
does not update the blob’s ETag.
Parameters:
**standard_blob_tier** (_str_ _or_ _StandardBlobTier_) – Indicates the tier to
be set on the blob. Options include ‘Hot’, ‘Cool’, ‘Archive’. The hot tier is
optimized for storing data that is accessed frequently. The cool storage tier
is optimized for storing data that is infrequently accessed and stored for at
least a month. The archive tier is optimized for storing data that is rarely
accessed and stored for at least six months with flexible latency
requirements.
Keyword Arguments:
* **rehydrate_priority** (_RehydratePriority_) – Indicates the priority with which to rehydrate an archived blob
* **version_id** (_str_) –
The version id parameter is an opaque DateTime value that, when present,
specifies the version of the blob to download.
Added in version 12.4.0.
This keyword argument was introduced in API version ‘2019-12-12’.
* **if_tags_match_condition** (_str_) –
Specify a SQL where clause on blob tags to operate only on blob with a
matching value. eg. `"\"tagname\"='my tag'"`
Added in version 12.4.0.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
* **lease** (_BlobLeaseClient_ _or_ _str_) – Required if the blob has an active lease. Value can be a BlobLeaseClient object or the lease ID as a string.
Return type:
None
stage_block(_block_id : str_, _data : bytes | str | Iterable | IO_, _length : int | None = None_, _** kwargs: Any_) → Dict[str, Any][source]¶
Creates a new block to be committed as part of a blob.
Parameters:
* **block_id** (_str_) – A string value that identifies the block. The string should be less than or equal to 64 bytes in size. For a given blob, the block_id must be the same size for each block.
* **data** (_Union_ _[__bytes_ _,__str_ _,__Iterable_ _[__AnyStr_ _]__,__IO_ _[__AnyStr_ _]__]_) – The blob data.
* **length** (_int_) – Size of the block.
Keyword Arguments:
* **validate_content** (_bool_) – If true, calculates an MD5 hash for each chunk of the blob. The storage service checks the hash of the content that has arrived with the hash that was sent. This is primarily valuable for detecting bitflips on the wire if using http instead of https, as https (the default), will already validate. Note that this MD5 hash is not stored with the blob. Also note that if enabled, the memory-efficient upload algorithm will not be used because computing the MD5 hash requires buffering entire blocks, and doing so defeats the purpose of the memory-efficient algorithm.
* **lease** (_BlobLeaseClient_ _or_ _str_) – Required if the blob has an active lease. Value can be a BlobLeaseClient object or the lease ID as a string.
* **encoding** (_str_) – Defaults to UTF-8.
* **cpk** (_CustomerProvidedEncryptionKey_) – Encrypts the data on the service-side with the given key. Use of customer-provided keys must be done over HTTPS. As the encryption key itself is provided in the request, a secure connection must be established to transfer the key.
* **encryption_scope** (_str_) –
A predefined encryption scope used to encrypt the data on the service. An
encryption scope can be created using the Management API and referenced here
by name. If a default encryption scope has been defined at the container, this
value will override it if the container-level scope is configured to allow
overrides. Otherwise an error will be raised.
Added in version 12.2.0.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
Blob property dict.
Return type:
dict[str, Any]
stage_block_from_url(_block_id : str_, _source_url : str_, _source_offset : int | None = None_, _source_length : int | None = None_, _source_content_md5 : bytes | bytearray | None = None_, _** kwargs: Any_) → Dict[str, Any][source]¶
Creates a new block to be committed as part of a blob where the contents are
read from a URL.
Parameters:
* **block_id** (_str_) – A string value that identifies the block. The string should be less than or equal to 64 bytes in size. For a given blob, the block_id must be the same size for each block.
* **source_url** (_str_) – The URL.
* **source_offset** (_int_) – Start of byte range to use for the block. Must be set if source length is provided.
* **source_length** (_int_) – The size of the block in bytes.
* **source_content_md5** (_bytearray_) – Specify the md5 calculated for the range of bytes that must be read from the copy source.
Keyword Arguments:
* **lease** (_BlobLeaseClient_ _or_ _str_) – Required if the blob has an active lease. Value can be a BlobLeaseClient object or the lease ID as a string.
* **cpk** (_CustomerProvidedEncryptionKey_) – Encrypts the data on the service-side with the given key. Use of customer-provided keys must be done over HTTPS. As the encryption key itself is provided in the request, a secure connection must be established to transfer the key.
* **encryption_scope** (_str_) –
A predefined encryption scope used to encrypt the data on the service. An
encryption scope can be created using the Management API and referenced here
by name. If a default encryption scope has been defined at the container, this
value will override it if the container-level scope is configured to allow
overrides. Otherwise an error will be raised.
Added in version 12.2.0.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
* **source_authorization** (_str_) – Authenticate as a service principal using a client secret to access a source blob. Ensure “bearer ” is the prefix of the source_authorization string.
Returns:
Blob property dict.
Return type:
dict[str, Any]
start_copy_from_url(_source_url : str_, _metadata : Dict[str, str] | None = None_, _incremental_copy : bool = False_, _** kwargs: Any_) → Dict[str, str | datetime][source]¶
Copies a blob from the given URL.
This operation returns a dictionary containing copy_status and copy_id, which
can be used to check the status of or abort the copy operation. copy_status
will be ‘success’ if the copy completed synchronously or ‘pending’ if the copy
has been started asynchronously. For asynchronous copies, the status can be
checked by polling the `get_blob_properties()` method and checking the copy
status. Set requires_sync to True to force the copy to be synchronous. The
Blob service copies blobs on a best-effort basis.
The source blob for a copy operation may be a block blob, an append blob, or a
page blob. If the destination blob already exists, it must be of the same blob
type as the source blob. Any existing destination blob will be overwritten.
The destination blob cannot be modified while a copy operation is in progress.
When copying from a page blob, the Blob service creates a destination page
blob of the source blob’s length, initially containing all zeroes. Then the
source page ranges are enumerated, and non-empty ranges are copied.
For a block blob or an append blob, the Blob service creates a committed blob
of zero length before returning from this operation. When copying from a block
blob, all committed blocks and their block IDs are copied. Uncommitted blocks
are not copied. At the end of the copy operation, the destination blob will
have the same committed block count as the source.
When copying from an append blob, all committed blocks are copied. At the end
of the copy operation, the destination blob will have the same committed block
count as the source.
Parameters:
* **source_url** (_str_) –
A URL of up to 2 KB in length that specifies a file or blob. The value should
be URL-encoded as it would appear in a request URI. If the source is in
another account, the source must either be public or must be authenticated via
a shared access signature. If the source is public, no authentication is
required. Examples: https://myaccount.blob.core.windows.net/mycontainer/myblob
https://myaccount.blob.core.windows.net/mycontainer/myblob?snapshot=<DateTime>
https://otheraccount.blob.core.windows.net/mycontainer/myblob?sastoken
* **metadata** (_dict_ _(__str_ _,__str_ _)_) – Name-value pairs associated with the blob as metadata. If no name-value pairs are specified, the operation will copy the metadata from the source blob or file to the destination blob. If one or more name-value pairs are specified, the destination blob is created with the specified metadata, and metadata is not copied from the source blob or file.
* **incremental_copy** (_bool_) – Copies the snapshot of the source page blob to a destination page blob. The snapshot is copied such that only the differential changes between the previously copied snapshot are transferred to the destination. The copied snapshots are complete copies of the original snapshot and can be read or copied from as usual. Defaults to False.
Keyword Arguments:
* **tags** (_dict_ _(__str_ _,__str_ _) or_ _Literal_ _[__"COPY"__]_) –
Name-value pairs associated with the blob as tag. Tags are case-sensitive. The
tag set may contain at most 10 tags. Tag keys must be between 1 and 128
characters, and tag values must be between 0 and 256 characters. Valid tag key
and value characters include: lowercase and uppercase letters, digits (0-9),
space (’ ‘), plus (+), minus (-), period (.), solidus (/), colon (:), equals
(=), underscore (_).
The (case-sensitive) literal “COPY” can instead be passed to copy tags from
the source blob. This option is only available when incremental_copy=False and
requires_sync=True.
Added in version 12.4.0.
* **immutability_policy** (_ImmutabilityPolicy_) –
Specifies the immutability policy of a blob, blob snapshot or blob version.
Added in version 12.10.0: This was introduced in API version ‘2020-10-02’.
* **legal_hold** (_bool_) –
Specified if a legal hold should be set on the blob.
Added in version 12.10.0: This was introduced in API version ‘2020-10-02’.
* **source_if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this conditional header to copy the blob only if the source blob has been modified since the specified date/time.
* **source_if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this conditional header to copy the blob only if the source blob has not been modified since the specified date/time.
* **source_etag** (_str_) – The source ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **source_match_condition** (_MatchConditions_) – The source match condition to use upon the etag.
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this conditional header to copy the blob only if the destination blob has been modified since the specified date/time. If the destination blob has not been modified, the Blob service returns status code 412 (Precondition Failed).
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this conditional header to copy the blob only if the destination blob has not been modified since the specified date/time. If the destination blob has been modified, the Blob service returns status code 412 (Precondition Failed).
* **etag** (_str_) – The destination ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **match_condition** (_MatchConditions_) – The destination match condition to use upon the etag.
* **destination_lease** (_BlobLeaseClient_ _or_ _str_) – The lease ID specified for this header must match the lease ID of the destination blob. If the request does not include the lease ID or it is not valid, the operation fails with status code 412 (Precondition Failed).
* **source_lease** (_BlobLeaseClient_ _or_ _str_) – Specify this to perform the Copy Blob operation only if the lease ID given matches the active lease ID of the source blob.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
* **premium_page_blob_tier** (_PremiumPageBlobTier_) – A page blob tier value to set the blob to. The tier correlates to the size of the blob and number of allowed IOPS. This is only applicable to page blobs on premium storage accounts.
* **standard_blob_tier** (_StandardBlobTier_) – A standard blob tier value to set the blob to. For this version of the library, this is only applicable to block blobs on standard storage accounts.
* **rehydrate_priority** (_RehydratePriority_) – Indicates the priority with which to rehydrate an archived blob
* **seal_destination_blob** (_bool_) –
Seal the destination append blob. This operation is only for append blob.
Added in version 12.4.0.
* **requires_sync** (_bool_) – Enforces that the service will not return a response until the copy is complete.
* **source_authorization** (_str_) –
Authenticate as a service principal using a client secret to access a source
blob. Ensure “bearer ” is the prefix of the source_authorization string. This
option is only available when incremental_copy is set to False and
requires_sync is set to True.
Added in version 12.9.0.
* **encryption_scope** (_str_) –
A predefined encryption scope used to encrypt the data on the sync copied
blob. An encryption scope can be created using the Management API and
referenced here by name. If a default encryption scope has been defined at the
container, this value will override it if the container-level scope is
configured to allow overrides. Otherwise an error will be raised.
Added in version 12.10.0.
Returns:
A dictionary of copy properties (etag, last_modified, copy_id, copy_status).
Return type:
dict[str, Union[str, _datetime_]]
Example:
Copy a blob from a URL.¶
# Get the blob client with the source blob
source_blob = "https://www.gutenberg.org/files/59466/59466-0.txt"
copied_blob = blob_service_client.get_blob_client("copyblobcontainer", '59466-0.txt')
# start copy and check copy status
copy = copied_blob.start_copy_from_url(source_blob)
props = copied_blob.get_blob_properties()
print(props.copy.status)
undelete_blob(_** kwargs: Any_) → None[source]¶
Restores soft-deleted blobs or snapshots.
Operation will only be successful if used within the specified number of days
set in the delete retention policy.
If blob versioning is enabled, the base blob cannot be restored using this
method. Instead use `start_copy_from_url()` with the URL of the blob version
you wish to promote to the current version.
Keyword Arguments:
**timeout** (_int_) – Sets the server-side timeout for the operation in
seconds. For more details see
https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-
blob-service-operations. This value is not tracked or validated on the client.
To configure client-side network timesouts see here.
Return type:
None
Example:
Undeleting a blob.¶
# Undelete the blob before the retention policy expires
blob_client.undelete_blob()
upload_blob(_data : bytes | str | Iterable | IO[bytes]_, _blob_type : str | BlobType = BlobType.BLOCKBLOB_, _length : int | None = None_, _metadata : Dict[str, str] | None = None_, _** kwargs: Any_) → Dict[str, Any][source]¶
Creates a new blob from a data source with automatic chunking.
Parameters:
* **data** (_Union_ _[__bytes_ _,__str_ _,__Iterable_ _[__AnyStr_ _]__,__IO_ _[__AnyStr_ _]__]_) – The blob data to upload.
* **blob_type** (_BlobType_) – The type of the blob. This can be either BlockBlob, PageBlob or AppendBlob. The default value is BlockBlob.
* **length** (_int_) – Number of bytes to read from the stream. This is optional, but should be supplied for optimal performance.
* **metadata** (_dict_ _(__str_ _,__str_ _)_) – Name-value pairs associated with the blob as metadata.
Keyword Arguments:
* **tags** (_dict_ _(__str_ _,__str_ _)_) –
Name-value pairs associated with the blob as tag. Tags are case-sensitive. The
tag set may contain at most 10 tags. Tag keys must be between 1 and 128
characters, and tag values must be between 0 and 256 characters. Valid tag key
and value characters include: lowercase and uppercase letters, digits (0-9),
space (’ ‘), plus (+), minus (-), period (.), solidus (/), colon (:), equals
(=), underscore (_)
Added in version 12.4.0.
* **overwrite** (_bool_) – Whether the blob to be uploaded should overwrite the current data. If True, upload_blob will overwrite the existing data. If set to False, the operation will fail with ResourceExistsError. The exception to the above is with Append blob types: if set to False and the data already exists, an error will not be raised and the data will be appended to the existing blob. If set overwrite=True, then the existing append blob will be deleted, and a new one created. Defaults to False.
* **content_settings** (_ContentSettings_) – ContentSettings object used to set blob properties. Used to set content type, encoding, language, disposition, md5, and cache control.
* **validate_content** (_bool_) – If true, calculates an MD5 hash for each chunk of the blob. The storage service checks the hash of the content that has arrived with the hash that was sent. This is primarily valuable for detecting bitflips on the wire if using http instead of https, as https (the default), will already validate. Note that this MD5 hash is not stored with the blob. Also note that if enabled, the memory-efficient upload algorithm will not be used because computing the MD5 hash requires buffering entire blocks, and doing so defeats the purpose of the memory-efficient algorithm.
* **lease** (_BlobLeaseClient_ _or_ _str_) – Required if the blob has an active lease. If specified, upload_blob only succeeds if the blob’s lease is active and matches this ID. Value can be a BlobLeaseClient object or the lease ID as a string.
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **etag** (_str_) – An ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **match_condition** (_MatchConditions_) – The match condition to use upon the etag.
* **if_tags_match_condition** (_str_) –
Specify a SQL where clause on blob tags to operate only on blob with a
matching value. eg. `"\"tagname\"='my tag'"`
Added in version 12.4.0.
* **premium_page_blob_tier** (_PremiumPageBlobTier_) – A page blob tier value to set the blob to. The tier correlates to the size of the blob and number of allowed IOPS. This is only applicable to page blobs on premium storage accounts.
* **standard_blob_tier** (_StandardBlobTier_) – A standard blob tier value to set the blob to. For this version of the library, this is only applicable to block blobs on standard storage accounts.
* **immutability_policy** (_ImmutabilityPolicy_) –
Specifies the immutability policy of a blob, blob snapshot or blob version.
Currently this parameter of upload_blob() API is for BlockBlob only.
Added in version 12.10.0: This was introduced in API version ‘2020-10-02’.
* **legal_hold** (_bool_) –
Specified if a legal hold should be set on the blob. Currently this parameter
of upload_blob() API is for BlockBlob only.
Added in version 12.10.0: This was introduced in API version ‘2020-10-02’.
* **maxsize_condition** (_int_) – Optional conditional header. The max length in bytes permitted for the append blob. If the Append Block operation would cause the blob to exceed that limit or if the blob size is already greater than the value specified in this header, the request will fail with MaxBlobSizeConditionNotMet error (HTTP status code 412 - Precondition Failed).
* **max_concurrency** (_int_) – Maximum number of parallel connections to use when the blob size exceeds 64MB.
* **cpk** (_CustomerProvidedEncryptionKey_) – Encrypts the data on the service-side with the given key. Use of customer-provided keys must be done over HTTPS. As the encryption key itself is provided in the request, a secure connection must be established to transfer the key.
* **encryption_scope** (_str_) –
A predefined encryption scope used to encrypt the data on the service. An
encryption scope can be created using the Management API and referenced here
by name. If a default encryption scope has been defined at the container, this
value will override it if the container-level scope is configured to allow
overrides. Otherwise an error will be raised.
Added in version 12.2.0.
* **encoding** (_str_) – Defaults to UTF-8.
* **progress_hook** (_Callable_ _[__[__int_ _,__Optional_ _[__int_ _]__]__,__None_ _]_) – A callback to track the progress of a long running upload. The signature is function(current: int, total: Optional[int]) where current is the number of bytes transferred so far, and total is the size of the blob or None if the size is unknown.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here. This method may make multiple calls to the service and the timeout will apply to each call individually.
Returns:
Blob-updated property Dict (Etag and last modified)
Return type:
Dict[str, Any]
Example:
Upload a blob to the container.¶
# Upload content to block blob
with open(SOURCE_FILE, "rb") as data:
blob_client.upload_blob(data, blob_type="BlockBlob")
upload_blob_from_url(_source_url : str_, _** kwargs: Any_) → Dict[str,
Any][source]¶
Creates a new Block Blob where the content of the blob is read from a given
URL. The content of an existing blob is overwritten with the new blob.
Parameters:
**source_url** (_str_) –
A URL of up to 2 KB in length that specifies a file or blob. The value should
be URL-encoded as it would appear in a request URI. The source must either be
public or must be authenticated via a shared access signature as part of the
url or using the source_authorization keyword. If the source is public, no
authentication is required. Examples:
https://myaccount.blob.core.windows.net/mycontainer/myblob
https://myaccount.blob.core.windows.net/mycontainer/myblob?snapshot=<DateTime>
https://otheraccount.blob.core.windows.net/mycontainer/myblob?sastoken
Keyword Arguments:
* **overwrite** (_bool_) – Whether the blob to be uploaded should overwrite the current data. If True, upload_blob will overwrite the existing data. If set to False, the operation will fail with ResourceExistsError.
* **include_source_blob_properties** (_bool_) – Indicates if properties from the source blob should be copied. Defaults to True.
* **tags** (_dict_ _(__str_ _,__str_ _)_) – Name-value pairs associated with the blob as tag. Tags are case-sensitive. The tag set may contain at most 10 tags. Tag keys must be between 1 and 128 characters, and tag values must be between 0 and 256 characters. Valid tag key and value characters include: lowercase and uppercase letters, digits (0-9), space (’ ‘), plus (+), minus (-), period (.), solidus (/), colon (:), equals (=), underscore (_)
* **source_content_md5** (_bytearray_) – Specify the md5 that is used to verify the integrity of the source bytes.
* **source_if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the source resource has been modified since the specified time.
* **source_if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the source resource has not been modified since the specified date/time.
* **source_etag** (_str_) – The source ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **source_match_condition** (_MatchConditions_) – The source match condition to use upon the etag.
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **etag** (_str_) – The destination ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **match_condition** (_MatchConditions_) – The destination match condition to use upon the etag.
* **destination_lease** (_BlobLeaseClient_ _or_ _str_) – The lease ID specified for this header must match the lease ID of the destination blob. If the request does not include the lease ID or it is not valid, the operation fails with status code 412 (Precondition Failed).
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
* **content_settings** (_ContentSettings_) – ContentSettings object used to set blob properties. Used to set content type, encoding, language, disposition, md5, and cache control.
* **cpk** (_CustomerProvidedEncryptionKey_) – Encrypts the data on the service-side with the given key. Use of customer-provided keys must be done over HTTPS. As the encryption key itself is provided in the request, a secure connection must be established to transfer the key.
* **encryption_scope** (_str_) – A predefined encryption scope used to encrypt the data on the service. An encryption scope can be created using the Management API and referenced here by name. If a default encryption scope has been defined at the container, this value will override it if the container-level scope is configured to allow overrides. Otherwise an error will be raised.
* **standard_blob_tier** (_StandardBlobTier_) – A standard blob tier value to set the blob to. For this version of the library, this is only applicable to block blobs on standard storage accounts.
* **source_authorization** (_str_) – Authenticate as a service principal using a client secret to access a source blob. Ensure “bearer ” is the prefix of the source_authorization string.
Returns:
Blob-updated property Dict (Etag and last modified)
Return type:
Dict[str, Any]
upload_page(_page : bytes_, _offset : int_, _length : int_, _** kwargs: Any_) → Dict[str, str | datetime][source]¶
The Upload Pages operation writes a range of pages to a page blob.
Parameters:
* **page** (_bytes_) – Content of the page.
* **offset** (_int_) – Start of byte range to use for writing to a section of the blob. Pages must be aligned with 512-byte boundaries, the start offset must be a modulus of 512 and the length must be a modulus of 512.
* **length** (_int_) – Number of bytes to use for writing to a section of the blob. Pages must be aligned with 512-byte boundaries, the start offset must be a modulus of 512 and the length must be a modulus of 512.
Keyword Arguments:
* **lease** (_BlobLeaseClient_ _or_ _str_) – Required if the blob has an active lease. Value can be a BlobLeaseClient object or the lease ID as a string.
* **validate_content** (_bool_) – If true, calculates an MD5 hash of the page content. The storage service checks the hash of the content that has arrived with the hash that was sent. This is primarily valuable for detecting bitflips on the wire if using http instead of https, as https (the default), will already validate. Note that this MD5 hash is not stored with the blob.
* **if_sequence_number_lte** (_int_) – If the blob’s sequence number is less than or equal to the specified value, the request proceeds; otherwise it fails.
* **if_sequence_number_lt** (_int_) – If the blob’s sequence number is less than the specified value, the request proceeds; otherwise it fails.
* **if_sequence_number_eq** (_int_) – If the blob’s sequence number is equal to the specified value, the request proceeds; otherwise it fails.
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **etag** (_str_) – An ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **match_condition** (_MatchConditions_) – The match condition to use upon the etag.
* **if_tags_match_condition** (_str_) –
Specify a SQL where clause on blob tags to operate only on blob with a
matching value. eg. `"\"tagname\"='my tag'"`
Added in version 12.4.0.
* **cpk** (_CustomerProvidedEncryptionKey_) – Encrypts the data on the service-side with the given key. Use of customer-provided keys must be done over HTTPS. As the encryption key itself is provided in the request, a secure connection must be established to transfer the key.
* **encryption_scope** (_str_) –
A predefined encryption scope used to encrypt the data on the service. An
encryption scope can be created using the Management API and referenced here
by name. If a default encryption scope has been defined at the container, this
value will override it if the container-level scope is configured to allow
overrides. Otherwise an error will be raised.
Added in version 12.2.0.
* **encoding** (_str_) – Defaults to UTF-8.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
Blob-updated property dict (Etag and last modified).
Return type:
dict(str, Any)
upload_pages_from_url(_source_url : str_, _offset : int_, _length : int_,
_source_offset : int_, _** kwargs: Any_) → Dict[str, Any][source]¶
The Upload Pages operation writes a range of pages to a page blob where the
contents are read from a URL.
Parameters:
* **source_url** (_str_) – The URL of the source data. It can point to any Azure Blob or File, that is either public or has a shared access signature attached.
* **offset** (_int_) – Start of byte range to use for writing to a section of the blob. Pages must be aligned with 512-byte boundaries, the start offset must be a modulus of 512 and the length must be a modulus of 512.
* **length** (_int_) – Number of bytes to use for writing to a section of the blob. Pages must be aligned with 512-byte boundaries, the start offset must be a modulus of 512 and the length must be a modulus of 512.
* **source_offset** (_int_) – This indicates the start of the range of bytes(inclusive) that has to be taken from the copy source. The service will read the same number of bytes as the destination range (length-offset).
Keyword Arguments:
* **source_content_md5** (_bytes_) – If given, the service will calculate the MD5 hash of the block content and compare against this value.
* **source_if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the source resource has been modified since the specified time.
* **source_if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the source resource has not been modified since the specified date/time.
* **source_etag** (_str_) – The source ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **source_match_condition** (_MatchConditions_) – The source match condition to use upon the etag.
* **lease** (_BlobLeaseClient_ _or_ _str_) – Required if the blob has an active lease. Value can be a BlobLeaseClient object or the lease ID as a string.
* **if_sequence_number_lte** (_int_) – If the blob’s sequence number is less than or equal to the specified value, the request proceeds; otherwise it fails.
* **if_sequence_number_lt** (_int_) – If the blob’s sequence number is less than the specified value, the request proceeds; otherwise it fails.
* **if_sequence_number_eq** (_int_) – If the blob’s sequence number is equal to the specified value, the request proceeds; otherwise it fails.
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **etag** (_str_) – The destination ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **match_condition** (_MatchConditions_) – The destination match condition to use upon the etag.
* **if_tags_match_condition** (_str_) –
Specify a SQL where clause on blob tags to operate only on blob with a
matching value. eg. `"\"tagname\"='my tag'"`
Added in version 12.4.0.
* **cpk** (_CustomerProvidedEncryptionKey_) – Encrypts the data on the service-side with the given key. Use of customer-provided keys must be done over HTTPS. As the encryption key itself is provided in the request, a secure connection must be established to transfer the key.
* **encryption_scope** (_str_) –
A predefined encryption scope used to encrypt the data on the service. An
encryption scope can be created using the Management API and referenced here
by name. If a default encryption scope has been defined at the container, this
value will override it if the container-level scope is configured to allow
overrides. Otherwise an error will be raised.
Added in version 12.2.0.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
* **source_authorization** (_str_) – Authenticate as a service principal using a client secret to access a source blob. Ensure “bearer ” is the prefix of the source_authorization string.
Returns:
Response after uploading pages from specified URL.
Return type:
Dict[str, Any]
_property _api_version¶
The version of the Storage API used for requests.
Return type:
str
_property _location_mode¶
The location mode that the client is currently using.
By default this will be “primary”. Options include “primary” and “secondary”.
Return type:
str
_property _primary_endpoint¶
The full primary endpoint URL.
Return type:
str
_property _primary_hostname¶
The hostname of the primary endpoint.
Return type:
str
_property _secondary_endpoint¶
The full secondary endpoint URL if configured.
If not available a ValueError will be raised. To explicitly specify a
secondary hostname, use the optional secondary_hostname keyword argument on
instantiation.
Return type:
str
Raises:
**ValueError** –
_property _secondary_hostname¶
The hostname of the secondary endpoint.
If not available this will be None. To explicitly specify a secondary
hostname, use the optional secondary_hostname keyword argument on
instantiation.
Return type:
Optional[str]
_property _url¶
The full endpoint URL to this entity, including SAS token if used.
This could be either the primary endpoint, or the secondary endpoint depending
on the current `location_mode()`. :returns: The full endpoint URL to this
entity, including SAS token if used. :rtype: str
_class _azure.storage.blob.BlobImmutabilityPolicyMode(_value_ , _names =None_,
_*_ , _module =None_, _qualname =None_, _type =None_, _start =1_, _boundary
=None_)[source]¶
Specifies the immutability policy mode to set on the blob. “Mutable” can only
be returned by service, don’t set to “Mutable”.
capitalize()¶
Return a capitalized version of the string.
More specifically, make the first character have upper case and the rest lower
case.
casefold()¶
Return a version of the string suitable for caseless comparisons.
center(_width_ , _fillchar =' '_, _/_)¶
Return a centered string of length width.
Padding is done using the specified fill character (default is a space).
count(_sub_[, _start_[, _end_]]) → int¶
Return the number of non-overlapping occurrences of substring sub in string
S[start:end]. Optional arguments start and end are interpreted as in slice
notation.
encode(_encoding ='utf-8'_, _errors ='strict'_)¶
Encode the string using the codec registered for encoding.
encoding
The encoding in which to encode the string.
errors
The error handling scheme to use for encoding errors. The default is ‘strict’
meaning that encoding errors raise a UnicodeEncodeError. Other possible values
are ‘ignore’, ‘replace’ and ‘xmlcharrefreplace’ as well as any other name
registered with codecs.register_error that can handle UnicodeEncodeErrors.
endswith(_suffix_[, _start_[, _end_]]) → bool¶
Return True if S ends with the specified suffix, False otherwise. With
optional start, test S beginning at that position. With optional end, stop
comparing S at that position. suffix can also be a tuple of strings to try.
expandtabs(_tabsize =8_)¶
Return a copy where all tab characters are expanded using spaces.
If tabsize is not given, a tab size of 8 characters is assumed.
find(_sub_[, _start_[, _end_]]) → int¶
Return the lowest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Return -1 on failure.
format(_* args_, _** kwargs_) → str¶
Return a formatted version of S, using substitutions from args and kwargs. The
substitutions are identified by braces (‘{’ and ‘}’).
format_map(_mapping_) → str¶
Return a formatted version of S, using substitutions from mapping. The
substitutions are identified by braces (‘{’ and ‘}’).
index(_sub_[, _start_[, _end_]]) → int¶
Return the lowest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Raises ValueError when the substring is not found.
isalnum()¶
Return True if the string is an alpha-numeric string, False otherwise.
A string is alpha-numeric if all characters in the string are alpha-numeric
and there is at least one character in the string.
isalpha()¶
Return True if the string is an alphabetic string, False otherwise.
A string is alphabetic if all characters in the string are alphabetic and
there is at least one character in the string.
isascii()¶
Return True if all characters in the string are ASCII, False otherwise.
ASCII characters have code points in the range U+0000-U+007F. Empty string is
ASCII too.
isdecimal()¶
Return True if the string is a decimal string, False otherwise.
A string is a decimal string if all characters in the string are decimal and
there is at least one character in the string.
isdigit()¶
Return True if the string is a digit string, False otherwise.
A string is a digit string if all characters in the string are digits and
there is at least one character in the string.
isidentifier()¶
Return True if the string is a valid Python identifier, False otherwise.
Call keyword.iskeyword(s) to test whether string s is a reserved identifier,
such as “def” or “class”.
islower()¶
Return True if the string is a lowercase string, False otherwise.
A string is lowercase if all cased characters in the string are lowercase and
there is at least one cased character in the string.
isnumeric()¶
Return True if the string is a numeric string, False otherwise.
A string is numeric if all characters in the string are numeric and there is
at least one character in the string.
isprintable()¶
Return True if the string is printable, False otherwise.
A string is printable if all of its characters are considered printable in
repr() or if it is empty.
isspace()¶
Return True if the string is a whitespace string, False otherwise.
A string is whitespace if all characters in the string are whitespace and
there is at least one character in the string.
istitle()¶
Return True if the string is a title-cased string, False otherwise.
In a title-cased string, upper- and title-case characters may only follow
uncased characters and lowercase characters only cased ones.
isupper()¶
Return True if the string is an uppercase string, False otherwise.
A string is uppercase if all cased characters in the string are uppercase and
there is at least one cased character in the string.
join(_iterable_ , _/_)¶
Concatenate any number of strings.
The string whose method is called is inserted in between each given string.
The result is returned as a new string.
Example: ‘.’.join([‘ab’, ‘pq’, ‘rs’]) -> ‘ab.pq.rs’
ljust(_width_ , _fillchar =' '_, _/_)¶
Return a left-justified string of length width.
Padding is done using the specified fill character (default is a space).
lower()¶
Return a copy of the string converted to lowercase.
lstrip(_chars =None_, _/_)¶
Return a copy of the string with leading whitespace removed.
If chars is given and not None, remove characters in chars instead.
_static _maketrans()¶
Return a translation table usable for str.translate().
If there is only one argument, it must be a dictionary mapping Unicode
ordinals (integers) or characters to Unicode ordinals, strings or None.
Character keys will be then converted to ordinals. If there are two arguments,
they must be strings of equal length, and in the resulting dictionary, each
character in x will be mapped to the character at the same position in y. If
there is a third argument, it must be a string, whose characters will be
mapped to None in the result.
partition(_sep_ , _/_)¶
Partition the string into three parts using the given separator.
This will search for the separator in the string. If the separator is found,
returns a 3-tuple containing the part before the separator, the separator
itself, and the part after it.
If the separator is not found, returns a 3-tuple containing the original
string and two empty strings.
removeprefix(_prefix_ , _/_)¶
Return a str with the given prefix string removed if present.
If the string starts with the prefix string, return string[len(prefix):].
Otherwise, return a copy of the original string.
removesuffix(_suffix_ , _/_)¶
Return a str with the given suffix string removed if present.
If the string ends with the suffix string and that suffix is not empty, return
string[:-len(suffix)]. Otherwise, return a copy of the original string.
replace(_old_ , _new_ , _count =-1_, _/_)¶
Return a copy with all occurrences of substring old replaced by new.
> count
>
>
> Maximum number of occurrences to replace. -1 (the default value) means
> replace all occurrences.
If the optional argument count is given, only the first count occurrences are
replaced.
rfind(_sub_[, _start_[, _end_]]) → int¶
Return the highest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Return -1 on failure.
rindex(_sub_[, _start_[, _end_]]) → int¶
Return the highest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Raises ValueError when the substring is not found.
rjust(_width_ , _fillchar =' '_, _/_)¶
Return a right-justified string of length width.
Padding is done using the specified fill character (default is a space).
rpartition(_sep_ , _/_)¶
Partition the string into three parts using the given separator.
This will search for the separator in the string, starting at the end. If the
separator is found, returns a 3-tuple containing the part before the
separator, the separator itself, and the part after it.
If the separator is not found, returns a 3-tuple containing two empty strings
and the original string.
rsplit(_sep =None_, _maxsplit =-1_)¶
Return a list of the substrings in the string, using sep as the separator
string.
> sep
>
>
> The separator used to split the string.
>
> When set to None (the default value), will split on any whitespace character
> (including n r t f and spaces) and will discard empty strings from the
> result.
>
> maxsplit
>
>
> Maximum number of splits. -1 (the default value) means no limit.
Splitting starts at the end of the string and works to the front.
rstrip(_chars =None_, _/_)¶
Return a copy of the string with trailing whitespace removed.
If chars is given and not None, remove characters in chars instead.
split(_sep =None_, _maxsplit =-1_)¶
Return a list of the substrings in the string, using sep as the separator
string.
> sep
>
>
> The separator used to split the string.
>
> When set to None (the default value), will split on any whitespace character
> (including n r t f and spaces) and will discard empty strings from the
> result.
>
> maxsplit
>
>
> Maximum number of splits. -1 (the default value) means no limit.
Splitting starts at the front of the string and works to the end.
Note, str.split() is mainly useful for data that has been intentionally
delimited. With natural text that includes punctuation, consider using the
regular expression module.
splitlines(_keepends =False_)¶
Return a list of the lines in the string, breaking at line boundaries.
Line breaks are not included in the resulting list unless keepends is given
and true.
startswith(_prefix_[, _start_[, _end_]]) → bool¶
Return True if S starts with the specified prefix, False otherwise. With
optional start, test S beginning at that position. With optional end, stop
comparing S at that position. prefix can also be a tuple of strings to try.
strip(_chars =None_, _/_)¶
Return a copy of the string with leading and trailing whitespace removed.
If chars is given and not None, remove characters in chars instead.
swapcase()¶
Convert uppercase characters to lowercase and lowercase characters to
uppercase.
title()¶
Return a version of the string where each word is titlecased.
More specifically, words start with uppercased characters and all remaining
cased characters have lower case.
translate(_table_ , _/_)¶
Replace each character in the string using the given translation table.
> table
>
>
> Translation table, which must be a mapping of Unicode ordinals to Unicode
> ordinals, strings, or None.
The table must implement lookup/indexing via __getitem__, for instance a
dictionary or list. If this operation raises LookupError, the character is
left untouched. Characters mapped to None are deleted.
upper()¶
Return a copy of the string converted to uppercase.
zfill(_width_ , _/_)¶
Pad a numeric string with zeros on the left, to fill a field of the given
width.
The string is never truncated.
LOCKED _ = 'Locked'_¶
MUTABLE _ = 'Mutable'_¶
UNLOCKED _ = 'Unlocked'_¶
_class _azure.storage.blob.BlobLeaseClient(_client : BlobClient | ContainerClient_, _lease_id : str | None = None_)[source]¶
Creates a new BlobLeaseClient.
This client provides lease operations on a BlobClient or ContainerClient.
:param client: The client of the blob or container to lease. :type client:
Union[BlobClient, ContainerClient] :param lease_id: A string representing the
lease ID of an existing lease. This value does not need to be specified in
order to acquire a new lease, or break one. :type lease_id: Optional[str]
acquire(_lease_duration : int = -1_, _** kwargs: Any_) → None[source]¶
Requests a new lease.
If the container does not have an active lease, the Blob service creates a
lease on the container and returns a new lease ID.
Parameters:
**lease_duration** (_int_) – Specifies the duration of the lease, in seconds,
or negative one (-1) for a lease that never expires. A non-infinite lease can
be between 15 and 60 seconds. A lease duration cannot be changed using renew
or change. Default is -1 (infinite lease).
Keyword Arguments:
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **etag** (_str_) – An ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **match_condition** (_MatchConditions_) – The match condition to use upon the etag.
* **if_tags_match_condition** (_str_) –
Specify a SQL where clause on blob tags to operate only on blob with a
matching value. eg. `"\"tagname\"='my tag'"`
Added in version 12.4.0.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Return type:
None
break_lease(_lease_break_period : int | None = None_, _** kwargs: Any_) → int[source]¶
Break the lease, if the container or blob has an active lease.
Once a lease is broken, it cannot be renewed. Any authorized request can break
the lease; the request is not required to specify a matching lease ID. When a
lease is broken, the lease break period is allowed to elapse, during which
time no lease operation except break and release can be performed on the
container or blob. When a lease is successfully broken, the response indicates
the interval in seconds until a new lease can be acquired.
Parameters:
**lease_break_period** (_int_) – This is the proposed duration of seconds that
the lease should continue before it is broken, between 0 and 60 seconds. This
break period is only used if it is shorter than the time remaining on the
lease. If longer, the time remaining on the lease is used. A new lease will
not be available before the break period has expired, but the lease may be
held for longer than the break period. If this header does not appear with a
break operation, a fixed-duration lease breaks after the remaining lease
period elapses, and an infinite lease breaks immediately.
Keyword Arguments:
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **if_tags_match_condition** (_str_) –
Specify a SQL where clause on blob tags to operate only on blob with a
matching value. eg. `"\"tagname\"='my tag'"`
Added in version 12.4.0.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
Approximate time remaining in the lease period, in seconds.
Return type:
int
change(_proposed_lease_id : str_, _** kwargs: Any_) → None[source]¶
Change the lease ID of an active lease.
Parameters:
**proposed_lease_id** (_str_) – Proposed lease ID, in a GUID string format.
The Blob service returns 400 (Invalid request) if the proposed lease ID is not
in the correct format.
Keyword Arguments:
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **etag** (_str_) – An ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **match_condition** (_MatchConditions_) – The match condition to use upon the etag.
* **if_tags_match_condition** (_str_) –
Specify a SQL where clause on blob tags to operate only on blob with a
matching value. eg. `"\"tagname\"='my tag'"`
Added in version 12.4.0.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
None
release(_** kwargs: Any_) → None[source]¶
Release the lease.
The lease may be released if the client lease id specified matches that
associated with the container or blob. Releasing the lease allows another
client to immediately acquire the lease for the container or blob as soon as
the release is complete.
Keyword Arguments:
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **etag** (_str_) – An ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **match_condition** (_MatchConditions_) – The match condition to use upon the etag.
* **if_tags_match_condition** (_str_) –
Specify a SQL where clause on blob tags to operate only on blob with a
matching value. eg. `"\"tagname\"='my tag'"`
Added in version 12.4.0.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
None
renew(_** kwargs: Any_) → None[source]¶
Renews the lease.
The lease can be renewed if the lease ID specified in the lease client matches
that associated with the container or blob. Note that the lease may be renewed
even if it has expired as long as the container or blob has not been leased
again since the expiration of that lease. When you renew a lease, the lease
duration clock resets.
Keyword Arguments:
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **etag** (_str_) – An ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **match_condition** (_MatchConditions_) – The match condition to use upon the etag.
* **if_tags_match_condition** (_str_) –
Specify a SQL where clause on blob tags to operate only on blob with a
matching value. eg. `"\"tagname\"='my tag'"`
Added in version 12.4.0.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
None
etag _: str | None_¶
The ETag of the lease currently being maintained. This will be None if no
lease has yet been acquired or modified.
id _: str_¶
The ID of the lease currently being maintained. This will be None if no lease
has yet been acquired.
last_modified _: datetime | None_¶
The last modified timestamp of the lease currently being maintained. This will
be None if no lease has yet been acquired or modified.
_class _azure.storage.blob.BlobPrefix(_* args: Any_, _** kwargs:
Any_)[source]¶
An Iterable of Blob properties.
Returned from walk_blobs when a delimiter is used. Can be thought of as a
virtual blob directory.
Return an iterator of items.
args and kwargs will be passed to the PageIterator constructor directly,
except page_iterator_class
by_page(_continuation_token : str | None = None_) → Iterator[Iterator[ReturnType]]¶
Get an iterator of pages of objects, instead of an iterator of objects.
Parameters:
**continuation_token** (_str_) – An opaque continuation token. This value can
be retrieved from the continuation_token field of a previous generator object.
If specified, this generator will begin returning results from this point.
Returns:
An iterator of pages (themselves iterator of objects)
Return type:
iterator[iterator[ReturnType]]
get(_key_ , _default =None_)¶
has_key(_k_)¶
items()¶
keys()¶
next() → ReturnType¶
Return the next item from the iterator. When exhausted, raise StopIteration
update(_* args_, _** kwargs_)¶
values()¶
command _: Callable_¶
Function to retrieve the next page of items.
container _: str_¶
The name of the container.
current_page _: List[BlobProperties] | None_¶
The current page of listed results.
delimiter _: str_¶
A delimiting character used for hierarchy listing.
location_mode _: str_¶
The location mode being used to list results. The available options include
“primary” and “secondary”.
marker _: str | None_¶
The continuation token of the current page of results.
name _: str_¶
The prefix, or “directory name” of the blob.
next_marker _: str | None_¶
The continuation token to retrieve the next page of results.
prefix _: str_¶
A blob name prefix being used to filter the list.
results_per_page _: int | None_¶
The maximum number of results retrieved per API call.
service_endpoint _: str | None_¶
The service URL.
_class _azure.storage.blob.BlobProperties(_** kwargs: Any_)[source]¶
Blob Properties.
get(_key_ , _default =None_)¶
has_key(_k_)¶
items()¶
keys()¶
update(_* args_, _** kwargs_)¶
values()¶
append_blob_committed_block_count _: int | None_¶
(For Append Blobs) Number of committed blocks in the blob.
archive_status _: str | None_¶
Archive status of blob.
blob_tier _: StandardBlobTier | None_¶
Indicates the access tier of the blob. The hot tier is optimized for storing
data that is accessed frequently. The cool storage tier is optimized for
storing data that is infrequently accessed and stored for at least a month.
The archive tier is optimized for storing data that is rarely accessed and
stored for at least six months with flexible latency requirements.
blob_tier_change_time _: datetime | None_¶
Indicates when the access tier was last changed.
blob_tier_inferred _: bool | None_¶
Indicates whether the access tier was inferred by the service. If false, it
indicates that the tier was set explicitly.
blob_type _: BlobType_¶
String indicating this blob’s type.
container _: str_¶
The container in which the blob resides.
content_range _: str | None_¶
Indicates the range of bytes returned in the event that the client requested a
subset of the blob.
content_settings _: ContentSettings_¶
Stores all the content settings for the blob.
copy _: CopyProperties_¶
Stores all the copy properties for the blob.
creation_time _: datetime_¶
Indicates when the blob was created, in UTC.
deleted _: bool | None_¶
Whether this blob was deleted.
deleted_time _: datetime | None_¶
A datetime object representing the time at which the blob was deleted.
encryption_key_sha256 _: str | None_¶
The SHA-256 hash of the provided encryption key.
encryption_scope _: str | None_¶
A predefined encryption scope used to encrypt the data on the service. An
encryption scope can be created using the Management API and referenced here
by name. If a default encryption scope has been defined at the container, this
value will override it if the container-level scope is configured to allow
overrides. Otherwise an error will be raised.
etag _: str_¶
The ETag contains a value that you can use to perform operations
conditionally.
has_legal_hold _: bool | None_¶
Specified if a legal hold should be set on the blob. Currently this parameter
of upload_blob() API is for BlockBlob only.
has_versions_only _: bool | None_¶
A true value indicates the root blob is deleted
immutability_policy _: ImmutabilityPolicy_¶
Specifies the immutability policy of a blob, blob snapshot or blob version.
is_append_blob_sealed _: bool | None_¶
Indicate if the append blob is sealed or not.
last_accessed_on _: datetime | None_¶
Indicates when the last Read/Write operation was performed on a Blob.
last_modified _: datetime_¶
A datetime object representing the last time the blob was modified.
lease _: LeaseProperties_¶
Stores all the lease information for the blob.
metadata _: Dict[str, str]_¶
Name-value pairs associated with the blob as metadata.
name _: str_¶
The name of the blob.
object_replication_destination_policy _: str | None_¶
Represents the Object Replication Policy Id that created this blob.
object_replication_source_properties _: List[ObjectReplicationPolicy] | None_¶
Only present for blobs that have policy ids and rule ids applied to them.
page_blob_sequence_number _: int | None_¶
(For Page Blobs) Sequence number for page blob used for coordinating
concurrent writes.
rehydrate_priority _: str | None_¶
Indicates the priority with which to rehydrate an archived blob
remaining_retention_days _: int | None_¶
The number of days that the blob will be retained before being permanently
deleted by the service.
request_server_encrypted _: bool | None_¶
Whether this blob is encrypted.
server_encrypted _: bool_¶
Set to true if the blob is encrypted on the server.
size _: int_¶
The size of the content returned. If the entire blob was requested, the length
of blob in bytes. If a subset of the blob was requested, the length of the
returned subset.
snapshot _: str | None_¶
Datetime value that uniquely identifies the blob snapshot.
tag_count _: int | None_¶
Tags count on this blob.
tags _: Dict[str, str] | None_¶
Key value pair of tags on this blob.
_class _azure.storage.blob.BlobQueryError(_error : str | None = None_, _is_fatal : bool = False_, _description : str | None = None_, _position : int | None = None_)[source]¶
The error happened during quick query operation.
description _: str | None_¶
A description of the error.
error _: str | None_¶
The name of the error.
is_fatal _: bool_¶
If true, this error prevents further query processing. More result data may be
returned, but there is no guarantee that all of the original data will be
processed. If false, this error does not prevent further query processing.
position _: int | None_¶
The blob offset at which the error occurred.
_class _azure.storage.blob.BlobQueryReader(_name : str = None_, _container : str = None_, _errors : Any = None_, _record_delimiter : str = '\n'_, _encoding : str | None = None_, _headers : Dict[str, Any] = None_, _response : Any = None_, _error_cls : Type[BlobQueryError] = None_)[source]¶
A streaming object to read query results.
readall() → bytes | str[source]¶
Return all query results.
This operation is blocking until all data is downloaded. If encoding has been
configured - this will be used to decode individual records are they are
received.
Returns:
The query results.
Return type:
Union[bytes, str]
readinto(_stream : IO_) → None[source]¶
Download the query result to a stream.
Parameters:
**stream** (_IO_) – The stream to download to. This can be an open file-
handle, or any writable stream.
Returns:
None
records() → Iterable[bytes | str][source]¶
Returns a record generator for the query result.
Records will be returned line by line. If encoding has been configured - this
will be used to decode individual records are they are received.
Returns:
A record generator for the query result.
Return type:
Iterable[Union[bytes, str]]
container _: str_¶
The name of the container where the blob is.
name _: str_¶
The name of the blob being quered.
record_delimiter _: str_¶
The delimiter used to separate lines, or records with the data. The records
method will return these lines via a generator.
response_headers _: Dict[str, Any]_¶
The response_headers of the quick query request.
_class _azure.storage.blob.BlobSasPermissions(_read : bool = False_, _add :
bool = False_, _create : bool = False_, _write : bool = False_, _delete : bool
= False_, _delete_previous_version : bool = False_, _tag : bool = False_, _**
kwargs: Any_)[source]¶
BlobSasPermissions class to be used with the `generate_blob_sas()` function.
Parameters:
* **read** (_bool_) – Read the content, properties, metadata and block list. Use the blob as the source of a copy operation.
* **add** (_bool_) – Add a block to an append blob.
* **create** (_bool_) – Write a new blob, snapshot a blob, or copy a blob to a new blob.
* **write** (_bool_) – Create or write content, properties, metadata, or block list. Snapshot or lease the blob. Resize the blob (page blob only). Use the blob as the destination of a copy operation within the same account.
* **delete** (_bool_) – Delete the blob.
* **delete_previous_version** (_bool_) – Delete the previous blob version for the versioning enabled storage account.
* **tag** (_bool_) – Set or get tags on the blob.
Keyword Arguments:
* **permanent_delete** (_bool_) – To enable permanent delete on the blob is permitted.
* **move** (_bool_) – Move a blob or a directory and its contents to a new location.
* **execute** (_bool_) – Get the system properties and, if the hierarchical namespace is enabled for the storage account, get the POSIX ACL of a blob.
* **set_immutability_policy** (_bool_) – To enable operations related to set/delete immutability policy. To get immutability policy, you just need read permission.
_classmethod _from_string(_permission : str_) → BlobSasPermissions[source]¶
Create a BlobSasPermissions from a string.
To specify read, add, create, write, or delete permissions you need only to
include the first letter of the word in the string. E.g. For read and write
permissions, you would provide a string “rw”.
Parameters:
**permission** (_str_) – The string which dictates the read, add, create,
write, or delete permissions.
Returns:
A BlobSasPermissions object
Return type:
_BlobSasPermissions_
add _: bool | None_¶
The add permission for Blob SAS.
create _: bool | None_¶
Write a new blob, snapshot a blob, or copy a blob to a new blob.
delete _: bool_ _ = False_¶
The delete permission for Blob SAS.
delete_previous_version _: bool_ _ = False_¶
Permission to delete previous blob version for versioning enabled storage
accounts.
execute _: bool | None_¶
Get the system properties and, if the hierarchical namespace is enabled for
the storage account, get the POSIX ACL of a blob.
move _: bool | None_¶
Move a blob or a directory and its contents to a new location.
permanent_delete _: bool | None_¶
To enable permanent delete on the blob is permitted.
read _: bool_ _ = False_¶
The read permission for Blob SAS.
set_immutability_policy _: bool | None_¶
To get immutability policy, you just need read permission.
tag _: bool_ _ = False_¶
Set or get tags on the blobs in the Blob.
write _: bool_ _ = False_¶
The write permission for Blob SAS.
_class _azure.storage.blob.BlobServiceClient(_account_url : str_, _credential : str | Dict[str, str] | AzureNamedKeyCredential | AzureSasCredential | TokenCredential | None = None_, _** kwargs: Any_)[source]¶
A client to interact with the Blob Service at the account level.
This client provides operations to retrieve and configure the account
properties as well as list, create and delete containers within the account.
For operations relating to a specific container or blob, clients for those
entities can also be retrieved using the get_client functions.
For more optional configuration, please click here.
Parameters:
* **account_url** (_str_) – The URL to the blob storage account. Any other entities included in the URL path (e.g. container or blob) will be discarded. This URL can be optionally authenticated with a SAS token.
* **credential** – The credentials with which to authenticate. This is optional if the account URL already has a SAS token. The value can be a SAS token string, an instance of a AzureSasCredential or AzureNamedKeyCredential from azure.core.credentials, an account shared access key, or an instance of a TokenCredentials class from azure.identity. If the resource URI already contains a SAS token, this will be ignored in favor of an explicit credential \- except in the case of AzureSasCredential, where the conflicting SAS tokens will raise a ValueError. If using an instance of AzureNamedKeyCredential, “name” should be the storage account name, and “key” should be the storage account key.
Keyword Arguments:
* **api_version** (_str_) –
The Storage API version to use for requests. Default value is the most recent
service version that is compatible with the current SDK. Setting to an older
version may result in reduced feature compatibility.
Added in version 12.2.0.
* **secondary_hostname** (_str_) – The hostname of the secondary endpoint.
* **max_block_size** (_int_) – The maximum chunk size for uploading a block blob in chunks. Defaults to 4*1024*1024, or 4MB.
* **max_single_put_size** (_int_) – If the blob size is less than or equal max_single_put_size, then the blob will be uploaded with only one http PUT request. If the blob size is larger than max_single_put_size, the blob will be uploaded in chunks. Defaults to 64*1024*1024, or 64MB.
* **min_large_block_upload_threshold** (_int_) – The minimum chunk size required to use the memory efficient algorithm when uploading a block blob. Defaults to 4*1024*1024+1.
* **use_byte_buffer** (_bool_) – Use a byte buffer for block blob uploads. Defaults to False.
* **max_page_size** (_int_) – The maximum chunk size for uploading a page blob. Defaults to 4*1024*1024, or 4MB.
* **max_single_get_size** (_int_) – The maximum size for a blob to be downloaded in a single call, the exceeded part will be downloaded in chunks (could be parallel). Defaults to 32*1024*1024, or 32MB.
* **max_chunk_get_size** (_int_) – The maximum chunk size used for downloading a blob. Defaults to 4*1024*1024, or 4MB.
* **audience** (_str_) – The audience to use when requesting tokens for Azure Active Directory authentication. Only has an effect when credential is of type TokenCredential. The value could be https://storage.azure.com/ (default) or https://<account>.blob.core.windows.net.
Example:
Creating the BlobServiceClient with account url and credential.¶
from azure.storage.blob import BlobServiceClient
blob_service_client = BlobServiceClient(account_url=self.url, credential=self.shared_access_key)
Creating the BlobServiceClient with Default Azure Identity credentials.¶
# Get a credential for authentication
# Default Azure Credentials attempt a chained set of authentication methods, per documentation here: https://github.com/Azure/azure-sdk-for-python/tree/azure-storage-blob_12.22.0/sdk/identity/azure-identity
# For example user (who must be an Azure Event Hubs Data Owner role) to be logged in can be specified by the environment variable AZURE_USERNAME
# Alternately, one can specify the AZURE_TENANT_ID, AZURE_CLIENT_ID, and AZURE_CLIENT_SECRET to use the EnvironmentCredentialClass.
# The docs above specify all mechanisms which the defaultCredential internally support.
from azure.identity import DefaultAzureCredential
default_credential = DefaultAzureCredential()
# Instantiate a BlobServiceClient using a token credential
from azure.storage.blob import BlobServiceClient
blob_service_client = BlobServiceClient(
account_url=self.oauth_url,
credential=default_credential
)
close()¶
This method is to close the sockets opened by the client. It need not be used
when using with a context manager.
create_container(_name : str_, _metadata : Dict[str, str] | None = None_, _public_access : PublicAccess | str | None = None_, _** kwargs: Any_) → ContainerClient[source]¶
Creates a new container under the specified account.
If the container with the same name already exists, a ResourceExistsError will
be raised. This method returns a client with which to interact with the newly
created container.
Parameters:
* **name** (_str_) – The name of the container to create.
* **metadata** (_dict_ _(__str_ _,__str_ _)_) – A dict with name-value pairs to associate with the container as metadata. Example: {‘Category’:’test’}
* **public_access** (_str_ _or_ _PublicAccess_) – Possible values include: ‘container’, ‘blob’.
Keyword Arguments:
* **container_encryption_scope** (_dict_ _or_ _ContainerEncryptionScope_) –
Specifies the default encryption scope to set on the container and use for all
future writes.
Added in version 12.2.0.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
A container client to interact with the newly created container.
Return type:
_ContainerClient_
Example:
Creating a container in the blob service.¶
try:
new_container = blob_service_client.create_container("containerfromblobservice")
properties = new_container.get_container_properties()
except ResourceExistsError:
print("Container already exists.")
delete_container(_container : ContainerProperties | str_, _lease : BlobLeaseClient | str | None = None_, _** kwargs: Any_) → None[source]¶
Marks the specified container for deletion.
The container and any blobs contained within it are later deleted during
garbage collection. If the container is not found, a ResourceNotFoundError
will be raised.
Parameters:
* **container** (_str_ _or_ _ContainerProperties_) – The container to delete. This can either be the name of the container, or an instance of ContainerProperties.
* **lease** (_BlobLeaseClient_ _or_ _str_) – If specified, delete_container only succeeds if the container’s lease is active and matches this ID. Required if the container has an active lease.
Keyword Arguments:
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **etag** (_str_) – An ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **match_condition** (_MatchConditions_) – The match condition to use upon the etag.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Example:
Deleting a container in the blob service.¶
# Delete container if it exists
try:
blob_service_client.delete_container("containerfromblobservice")
except ResourceNotFoundError:
print("Container already deleted.")
find_blobs_by_tags(_filter_expression : str_, _** kwargs: Any_) →
ItemPaged[FilteredBlob][source]¶
The Filter Blobs operation enables callers to list blobs across all containers
whose tags match a given search expression. Filter blobs searches across all
containers within a storage account but can be scoped within the expression to
a single container.
Parameters:
**filter_expression** (_str_) – The expression to find blobs whose tags
matches the specified condition. eg. “”yourtagname”=’firsttag’ and
“yourtagname2”=’secondtag’” To specify a container, eg.
“@container=’containerName’ and “Name”=’C’”
Keyword Arguments:
* **results_per_page** (_int_) – The max result per page when paginating.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
An iterable (auto-paging) response of BlobProperties.
Return type:
_ItemPaged_[_FilteredBlob_]
_classmethod _from_connection_string(_conn_str : str_, _credential : str | Dict[str, str] | AzureNamedKeyCredential | AzureSasCredential | TokenCredential | None = None_, _** kwargs: Any_) → Self[source]¶
Create BlobServiceClient from a Connection String.
Parameters:
* **conn_str** (_str_) – A connection string to an Azure Storage account.
* **credential** (_AzureNamedKeyCredential_ _or_ _AzureSasCredential_ _or_ _TokenCredential_ _or_ _str_ _or_ _dict_ _[__str_ _,__str_ _] or_ _None_) – The credentials with which to authenticate. This is optional if the account URL already has a SAS token, or the connection string already has shared access key values. The value can be a SAS token string, an instance of a AzureSasCredential or AzureNamedKeyCredential from azure.core.credentials, an account shared access key, or an instance of a TokenCredentials class from azure.identity. Credentials provided here will take precedence over those in the connection string. If using an instance of AzureNamedKeyCredential, “name” should be the storage account name, and “key” should be the storage account key.
Keyword Arguments:
**audience** (_str_) – The audience to use when requesting tokens for Azure
Active Directory authentication. Only has an effect when credential is of type
TokenCredential. The value could be https://storage.azure.com/ (default) or
https://<account>.blob.core.windows.net.
Returns:
A Blob service client.
Return type:
_BlobServiceClient_
Example:
Creating the BlobServiceClient from a connection string.¶
from azure.storage.blob import BlobServiceClient
blob_service_client = BlobServiceClient.from_connection_string(self.connection_string)
get_account_information(_** kwargs: Any_) → Dict[str, str][source]¶
Gets information related to the storage account.
The information can also be retrieved if the user has a SAS to a container or
blob. The keys in the returned dictionary include ‘sku_name’ and
‘account_kind’.
Returns:
A dict of account information (SKU and account type).
Return type:
dict(str, str)
Example:
Getting account information for the blob service.¶
account_info = blob_service_client.get_account_information()
print('Using Storage SKU: {}'.format(account_info['sku_name']))
get_blob_client(_container : ContainerProperties | str_, _blob : str_, _snapshot : str | Dict[str, Any] | None = None_, _*_ , _version_id : str | None = None_) → BlobClient[source]¶
Get a client to interact with the specified blob.
The blob need not already exist.
Parameters:
* **container** (_str_ _or_ _ContainerProperties_) – The container that the blob is in. This can either be the name of the container, or an instance of ContainerProperties.
* **blob** (_str_) – The name of the blob with which to interact.
* **snapshot** (_str_ _or_ _dict_ _(__str_ _,__Any_ _)_) – The optional blob snapshot on which to operate. This can either be the ID of the snapshot, or a dictionary output returned by `create_snapshot()`.
Keyword Arguments:
**version_id** (_str_) – The version id parameter is an opaque DateTime value
that, when present, specifies the version of the blob to operate on.
Returns:
A BlobClient.
Return type:
_BlobClient_
Example:
Getting the blob client to interact with a specific blob.¶
blob_client = blob_service_client.get_blob_client(container="containertest", blob="my_blob")
try:
stream = blob_client.download_blob()
except ResourceNotFoundError:
print("No blob found.")
get_container_client(_container : ContainerProperties | str_) → ContainerClient[source]¶
Get a client to interact with the specified container.
The container need not already exist.
Parameters:
**container** (_str_ _or_ _ContainerProperties_) – The container. This can
either be the name of the container, or an instance of ContainerProperties.
Returns:
A ContainerClient.
Return type:
_ContainerClient_
Example:
Getting the container client to interact with a specific container.¶
# Get a client to interact with a specific container - though it may not yet exist
container_client = blob_service_client.get_container_client("containertest")
try:
for blob in container_client.list_blobs():
print("Found blob: ", blob.name)
except ResourceNotFoundError:
print("Container not found.")
get_service_properties(_** kwargs: Any_) → Dict[str, Any][source]¶
Gets the properties of a storage account’s Blob service, including Azure
Storage Analytics.
Keyword Arguments:
**timeout** (_int_) – Sets the server-side timeout for the operation in
seconds. For more details see
https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-
blob-service-operations. This value is not tracked or validated on the client.
To configure client-side network timesouts see here.
Returns:
An object containing blob service properties such as analytics logging,
hour/minute metrics, cors rules, etc.
Return type:
Dict[str, Any]
Example:
Getting service properties for the blob service.¶
properties = blob_service_client.get_service_properties()
get_service_stats(_** kwargs: Any_) → Dict[str, Any][source]¶
Retrieves statistics related to replication for the Blob service.
It is only available when read-access geo-redundant replication is enabled for
the storage account.
With geo-redundant replication, Azure Storage maintains your data durable in
two locations. In both locations, Azure Storage constantly maintains multiple
healthy replicas of your data. The location where you read, create, update, or
delete data is the primary storage account location. The primary location
exists in the region you choose at the time you create an account via the
Azure Management Azure classic portal, for example, North Central US. The
location to which your data is replicated is the secondary location. The
secondary location is automatically determined based on the location of the
primary; it is in a second data center that resides in the same region as the
primary location. Read-only access is available from the secondary location,
if read-access geo-redundant replication is enabled for your storage account.
Keyword Arguments:
**timeout** (_int_) – Sets the server-side timeout for the operation in
seconds. For more details see
https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-
blob-service-operations. This value is not tracked or validated on the client.
To configure client-side network timesouts see here.
Returns:
The blob service stats.
Return type:
Dict[str, Any]
Example:
Getting service stats for the blob service.¶
stats = blob_service_client.get_service_stats()
get_user_delegation_key(_key_start_time : datetime_, _key_expiry_time :
datetime_, _** kwargs: Any_) → UserDelegationKey[source]¶
Obtain a user delegation key for the purpose of signing SAS tokens. A token
credential must be present on the service object for this request to succeed.
Parameters:
* **key_start_time** (_datetime_) – A DateTime value. Indicates when the key becomes valid.
* **key_expiry_time** (_datetime_) – A DateTime value. Indicates when the key stops being valid.
Keyword Arguments:
**timeout** (_int_) – Sets the server-side timeout for the operation in
seconds. For more details see
https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-
blob-service-operations. This value is not tracked or validated on the client.
To configure client-side network timesouts see here.
Returns:
The user delegation key.
Return type:
_UserDelegationKey_
list_containers(_name_starts_with : str | None = None_, _include_metadata : bool = False_, _** kwargs: Any_) → ItemPaged[ContainerProperties][source]¶
Returns a generator to list the containers under the specified account.
The generator will lazily follow the continuation tokens returned by the
service and stop when all containers have been returned.
Parameters:
* **name_starts_with** (_str_) – Filters the results to return only containers whose names begin with the specified prefix.
* **include_metadata** (_bool_) – Specifies that container metadata to be returned in the response. The default value is False.
Keyword Arguments:
* **include_deleted** (_bool_) – Specifies that deleted containers to be returned in the response. This is for container restore enabled account. The default value is False. .. versionadded:: 12.4.0
* **include_system** (_bool_) – Flag specifying that system containers should be included. .. versionadded:: 12.10.0
* **results_per_page** (_int_) – The maximum number of container names to retrieve per API call. If the request does not specify the server will return up to 5,000 items.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
An iterable (auto-paging) of ContainerProperties.
Return type:
_ItemPaged_[_ContainerProperties_]
Example:
Listing the containers in the blob service.¶
# List all containers
all_containers = blob_service_client.list_containers(include_metadata=True)
for container in all_containers:
print(container['name'], container['metadata'])
# Filter results with name prefix
test_containers = blob_service_client.list_containers(name_starts_with='test-')
for container in test_containers:
print(container['name'], container['metadata'])
set_service_properties(_analytics_logging : BlobAnalyticsLogging | None = None_, _hour_metrics : Metrics | None = None_, _minute_metrics : Metrics | None = None_, _cors : List[CorsRule] | None = None_, _target_version : str | None = None_, _delete_retention_policy : RetentionPolicy | None = None_, _static_website : StaticWebsite | None = None_, _** kwargs: Any_) → None[source]¶
Sets the properties of a storage account’s Blob service, including Azure
Storage Analytics.
If an element (e.g. analytics_logging) is left as None, the existing settings
on the service for that functionality are preserved.
Parameters:
* **analytics_logging** (_BlobAnalyticsLogging_) – Groups the Azure Analytics Logging settings.
* **hour_metrics** (_Metrics_) – The hour metrics settings provide a summary of request statistics grouped by API in hourly aggregates for blobs.
* **minute_metrics** (_Metrics_) – The minute metrics settings provide request statistics for each minute for blobs.
* **cors** (_list_ _[__CorsRule_ _]_) – You can include up to five CorsRule elements in the list. If an empty list is specified, all CORS rules will be deleted, and CORS will be disabled for the service.
* **target_version** (_str_) – Indicates the default version to use for requests if an incoming request’s version is not specified.
* **delete_retention_policy** (_RetentionPolicy_) – The delete retention policy specifies whether to retain deleted blobs. It also specifies the number of days and versions of blob to keep.
* **static_website** (_StaticWebsite_) – Specifies whether the static website feature is enabled, and if yes, indicates the index document and 404 error document to use.
Keyword Arguments:
**timeout** (_int_) – Sets the server-side timeout for the operation in
seconds. For more details see
https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-
blob-service-operations. This value is not tracked or validated on the client.
To configure client-side network timesouts see here.
Return type:
None
Example:
Setting service properties for the blob service.¶
# Create service properties
from azure.storage.blob import BlobAnalyticsLogging, Metrics, CorsRule, RetentionPolicy
# Create logging settings
logging = BlobAnalyticsLogging(read=True, write=True, delete=True, retention_policy=RetentionPolicy(enabled=True, days=5))
# Create metrics for requests statistics
hour_metrics = Metrics(enabled=True, include_apis=True, retention_policy=RetentionPolicy(enabled=True, days=5))
minute_metrics = Metrics(enabled=True, include_apis=True,
retention_policy=RetentionPolicy(enabled=True, days=5))
# Create CORS rules
cors_rule = CorsRule(['www.xyz.com'], ['GET'])
cors = [cors_rule]
# Set the service properties
blob_service_client.set_service_properties(logging, hour_metrics, minute_metrics, cors)
undelete_container(_deleted_container_name : str_, _deleted_container_version
: str_, _** kwargs: Any_) → ContainerClient[source]¶
Restores soft-deleted container.
Operation will only be successful if used within the specified number of days
set in the delete retention policy.
Added in version 12.4.0: This operation was introduced in API version
‘2019-12-12’.
Parameters:
* **deleted_container_name** (_str_) – Specifies the name of the deleted container to restore.
* **deleted_container_version** (_str_) – Specifies the version of the deleted container to restore.
Keyword Arguments:
**timeout** (_int_) – Sets the server-side timeout for the operation in
seconds. For more details see
https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-
blob-service-operations. This value is not tracked or validated on the client.
To configure client-side network timesouts see here.
Returns:
The undeleted ContainerClient.
Return type:
_ContainerClient_
_property _api_version¶
The version of the Storage API used for requests.
Return type:
str
_property _location_mode¶
The location mode that the client is currently using.
By default this will be “primary”. Options include “primary” and “secondary”.
Return type:
str
_property _primary_endpoint¶
The full primary endpoint URL.
Return type:
str
_property _primary_hostname¶
The hostname of the primary endpoint.
Return type:
str
_property _secondary_endpoint¶
The full secondary endpoint URL if configured.
If not available a ValueError will be raised. To explicitly specify a
secondary hostname, use the optional secondary_hostname keyword argument on
instantiation.
Return type:
str
Raises:
**ValueError** –
_property _secondary_hostname¶
The hostname of the secondary endpoint.
If not available this will be None. To explicitly specify a secondary
hostname, use the optional secondary_hostname keyword argument on
instantiation.
Return type:
Optional[str]
_property _url¶
The full endpoint URL to this entity, including SAS token if used.
This could be either the primary endpoint, or the secondary endpoint depending
on the current `location_mode()`. :returns: The full endpoint URL to this
entity, including SAS token if used. :rtype: str
_class _azure.storage.blob.BlobType(_value_ , _names =None_, _*_ , _module
=None_, _qualname =None_, _type =None_, _start =1_, _boundary =None_)[source]¶
capitalize()¶
Return a capitalized version of the string.
More specifically, make the first character have upper case and the rest lower
case.
casefold()¶
Return a version of the string suitable for caseless comparisons.
center(_width_ , _fillchar =' '_, _/_)¶
Return a centered string of length width.
Padding is done using the specified fill character (default is a space).
count(_sub_[, _start_[, _end_]]) → int¶
Return the number of non-overlapping occurrences of substring sub in string
S[start:end]. Optional arguments start and end are interpreted as in slice
notation.
encode(_encoding ='utf-8'_, _errors ='strict'_)¶
Encode the string using the codec registered for encoding.
encoding
The encoding in which to encode the string.
errors
The error handling scheme to use for encoding errors. The default is ‘strict’
meaning that encoding errors raise a UnicodeEncodeError. Other possible values
are ‘ignore’, ‘replace’ and ‘xmlcharrefreplace’ as well as any other name
registered with codecs.register_error that can handle UnicodeEncodeErrors.
endswith(_suffix_[, _start_[, _end_]]) → bool¶
Return True if S ends with the specified suffix, False otherwise. With
optional start, test S beginning at that position. With optional end, stop
comparing S at that position. suffix can also be a tuple of strings to try.
expandtabs(_tabsize =8_)¶
Return a copy where all tab characters are expanded using spaces.
If tabsize is not given, a tab size of 8 characters is assumed.
find(_sub_[, _start_[, _end_]]) → int¶
Return the lowest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Return -1 on failure.
format(_* args_, _** kwargs_) → str¶
Return a formatted version of S, using substitutions from args and kwargs. The
substitutions are identified by braces (‘{’ and ‘}’).
format_map(_mapping_) → str¶
Return a formatted version of S, using substitutions from mapping. The
substitutions are identified by braces (‘{’ and ‘}’).
index(_sub_[, _start_[, _end_]]) → int¶
Return the lowest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Raises ValueError when the substring is not found.
isalnum()¶
Return True if the string is an alpha-numeric string, False otherwise.
A string is alpha-numeric if all characters in the string are alpha-numeric
and there is at least one character in the string.
isalpha()¶
Return True if the string is an alphabetic string, False otherwise.
A string is alphabetic if all characters in the string are alphabetic and
there is at least one character in the string.
isascii()¶
Return True if all characters in the string are ASCII, False otherwise.
ASCII characters have code points in the range U+0000-U+007F. Empty string is
ASCII too.
isdecimal()¶
Return True if the string is a decimal string, False otherwise.
A string is a decimal string if all characters in the string are decimal and
there is at least one character in the string.
isdigit()¶
Return True if the string is a digit string, False otherwise.
A string is a digit string if all characters in the string are digits and
there is at least one character in the string.
isidentifier()¶
Return True if the string is a valid Python identifier, False otherwise.
Call keyword.iskeyword(s) to test whether string s is a reserved identifier,
such as “def” or “class”.
islower()¶
Return True if the string is a lowercase string, False otherwise.
A string is lowercase if all cased characters in the string are lowercase and
there is at least one cased character in the string.
isnumeric()¶
Return True if the string is a numeric string, False otherwise.
A string is numeric if all characters in the string are numeric and there is
at least one character in the string.
isprintable()¶
Return True if the string is printable, False otherwise.
A string is printable if all of its characters are considered printable in
repr() or if it is empty.
isspace()¶
Return True if the string is a whitespace string, False otherwise.
A string is whitespace if all characters in the string are whitespace and
there is at least one character in the string.
istitle()¶
Return True if the string is a title-cased string, False otherwise.
In a title-cased string, upper- and title-case characters may only follow
uncased characters and lowercase characters only cased ones.
isupper()¶
Return True if the string is an uppercase string, False otherwise.
A string is uppercase if all cased characters in the string are uppercase and
there is at least one cased character in the string.
join(_iterable_ , _/_)¶
Concatenate any number of strings.
The string whose method is called is inserted in between each given string.
The result is returned as a new string.
Example: ‘.’.join([‘ab’, ‘pq’, ‘rs’]) -> ‘ab.pq.rs’
ljust(_width_ , _fillchar =' '_, _/_)¶
Return a left-justified string of length width.
Padding is done using the specified fill character (default is a space).
lower()¶
Return a copy of the string converted to lowercase.
lstrip(_chars =None_, _/_)¶
Return a copy of the string with leading whitespace removed.
If chars is given and not None, remove characters in chars instead.
_static _maketrans()¶
Return a translation table usable for str.translate().
If there is only one argument, it must be a dictionary mapping Unicode
ordinals (integers) or characters to Unicode ordinals, strings or None.
Character keys will be then converted to ordinals. If there are two arguments,
they must be strings of equal length, and in the resulting dictionary, each
character in x will be mapped to the character at the same position in y. If
there is a third argument, it must be a string, whose characters will be
mapped to None in the result.
partition(_sep_ , _/_)¶
Partition the string into three parts using the given separator.
This will search for the separator in the string. If the separator is found,
returns a 3-tuple containing the part before the separator, the separator
itself, and the part after it.
If the separator is not found, returns a 3-tuple containing the original
string and two empty strings.
removeprefix(_prefix_ , _/_)¶
Return a str with the given prefix string removed if present.
If the string starts with the prefix string, return string[len(prefix):].
Otherwise, return a copy of the original string.
removesuffix(_suffix_ , _/_)¶
Return a str with the given suffix string removed if present.
If the string ends with the suffix string and that suffix is not empty, return
string[:-len(suffix)]. Otherwise, return a copy of the original string.
replace(_old_ , _new_ , _count =-1_, _/_)¶
Return a copy with all occurrences of substring old replaced by new.
> count
>
>
> Maximum number of occurrences to replace. -1 (the default value) means
> replace all occurrences.
If the optional argument count is given, only the first count occurrences are
replaced.
rfind(_sub_[, _start_[, _end_]]) → int¶
Return the highest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Return -1 on failure.
rindex(_sub_[, _start_[, _end_]]) → int¶
Return the highest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Raises ValueError when the substring is not found.
rjust(_width_ , _fillchar =' '_, _/_)¶
Return a right-justified string of length width.
Padding is done using the specified fill character (default is a space).
rpartition(_sep_ , _/_)¶
Partition the string into three parts using the given separator.
This will search for the separator in the string, starting at the end. If the
separator is found, returns a 3-tuple containing the part before the
separator, the separator itself, and the part after it.
If the separator is not found, returns a 3-tuple containing two empty strings
and the original string.
rsplit(_sep =None_, _maxsplit =-1_)¶
Return a list of the substrings in the string, using sep as the separator
string.
> sep
>
>
> The separator used to split the string.
>
> When set to None (the default value), will split on any whitespace character
> (including n r t f and spaces) and will discard empty strings from the
> result.
>
> maxsplit
>
>
> Maximum number of splits. -1 (the default value) means no limit.
Splitting starts at the end of the string and works to the front.
rstrip(_chars =None_, _/_)¶
Return a copy of the string with trailing whitespace removed.
If chars is given and not None, remove characters in chars instead.
split(_sep =None_, _maxsplit =-1_)¶
Return a list of the substrings in the string, using sep as the separator
string.
> sep
>
>
> The separator used to split the string.
>
> When set to None (the default value), will split on any whitespace character
> (including n r t f and spaces) and will discard empty strings from the
> result.
>
> maxsplit
>
>
> Maximum number of splits. -1 (the default value) means no limit.
Splitting starts at the front of the string and works to the end.
Note, str.split() is mainly useful for data that has been intentionally
delimited. With natural text that includes punctuation, consider using the
regular expression module.
splitlines(_keepends =False_)¶
Return a list of the lines in the string, breaking at line boundaries.
Line breaks are not included in the resulting list unless keepends is given
and true.
startswith(_prefix_[, _start_[, _end_]]) → bool¶
Return True if S starts with the specified prefix, False otherwise. With
optional start, test S beginning at that position. With optional end, stop
comparing S at that position. prefix can also be a tuple of strings to try.
strip(_chars =None_, _/_)¶
Return a copy of the string with leading and trailing whitespace removed.
If chars is given and not None, remove characters in chars instead.
swapcase()¶
Convert uppercase characters to lowercase and lowercase characters to
uppercase.
title()¶
Return a version of the string where each word is titlecased.
More specifically, words start with uppercased characters and all remaining
cased characters have lower case.
translate(_table_ , _/_)¶
Replace each character in the string using the given translation table.
> table
>
>
> Translation table, which must be a mapping of Unicode ordinals to Unicode
> ordinals, strings, or None.
The table must implement lookup/indexing via __getitem__, for instance a
dictionary or list. If this operation raises LookupError, the character is
left untouched. Characters mapped to None are deleted.
upper()¶
Return a copy of the string converted to uppercase.
zfill(_width_ , _/_)¶
Pad a numeric string with zeros on the left, to fill a field of the given
width.
The string is never truncated.
APPENDBLOB _ = 'AppendBlob'_¶
BLOCKBLOB _ = 'BlockBlob'_¶
PAGEBLOB _ = 'PageBlob'_¶
_class _azure.storage.blob.BlockState(_value_ , _names =None_, _*_ , _module
=None_, _qualname =None_, _type =None_, _start =1_, _boundary =None_)[source]¶
Block blob block types.
capitalize()¶
Return a capitalized version of the string.
More specifically, make the first character have upper case and the rest lower
case.
casefold()¶
Return a version of the string suitable for caseless comparisons.
center(_width_ , _fillchar =' '_, _/_)¶
Return a centered string of length width.
Padding is done using the specified fill character (default is a space).
count(_sub_[, _start_[, _end_]]) → int¶
Return the number of non-overlapping occurrences of substring sub in string
S[start:end]. Optional arguments start and end are interpreted as in slice
notation.
encode(_encoding ='utf-8'_, _errors ='strict'_)¶
Encode the string using the codec registered for encoding.
encoding
The encoding in which to encode the string.
errors
The error handling scheme to use for encoding errors. The default is ‘strict’
meaning that encoding errors raise a UnicodeEncodeError. Other possible values
are ‘ignore’, ‘replace’ and ‘xmlcharrefreplace’ as well as any other name
registered with codecs.register_error that can handle UnicodeEncodeErrors.
endswith(_suffix_[, _start_[, _end_]]) → bool¶
Return True if S ends with the specified suffix, False otherwise. With
optional start, test S beginning at that position. With optional end, stop
comparing S at that position. suffix can also be a tuple of strings to try.
expandtabs(_tabsize =8_)¶
Return a copy where all tab characters are expanded using spaces.
If tabsize is not given, a tab size of 8 characters is assumed.
find(_sub_[, _start_[, _end_]]) → int¶
Return the lowest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Return -1 on failure.
format(_* args_, _** kwargs_) → str¶
Return a formatted version of S, using substitutions from args and kwargs. The
substitutions are identified by braces (‘{’ and ‘}’).
format_map(_mapping_) → str¶
Return a formatted version of S, using substitutions from mapping. The
substitutions are identified by braces (‘{’ and ‘}’).
index(_sub_[, _start_[, _end_]]) → int¶
Return the lowest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Raises ValueError when the substring is not found.
isalnum()¶
Return True if the string is an alpha-numeric string, False otherwise.
A string is alpha-numeric if all characters in the string are alpha-numeric
and there is at least one character in the string.
isalpha()¶
Return True if the string is an alphabetic string, False otherwise.
A string is alphabetic if all characters in the string are alphabetic and
there is at least one character in the string.
isascii()¶
Return True if all characters in the string are ASCII, False otherwise.
ASCII characters have code points in the range U+0000-U+007F. Empty string is
ASCII too.
isdecimal()¶
Return True if the string is a decimal string, False otherwise.
A string is a decimal string if all characters in the string are decimal and
there is at least one character in the string.
isdigit()¶
Return True if the string is a digit string, False otherwise.
A string is a digit string if all characters in the string are digits and
there is at least one character in the string.
isidentifier()¶
Return True if the string is a valid Python identifier, False otherwise.
Call keyword.iskeyword(s) to test whether string s is a reserved identifier,
such as “def” or “class”.
islower()¶
Return True if the string is a lowercase string, False otherwise.
A string is lowercase if all cased characters in the string are lowercase and
there is at least one cased character in the string.
isnumeric()¶
Return True if the string is a numeric string, False otherwise.
A string is numeric if all characters in the string are numeric and there is
at least one character in the string.
isprintable()¶
Return True if the string is printable, False otherwise.
A string is printable if all of its characters are considered printable in
repr() or if it is empty.
isspace()¶
Return True if the string is a whitespace string, False otherwise.
A string is whitespace if all characters in the string are whitespace and
there is at least one character in the string.
istitle()¶
Return True if the string is a title-cased string, False otherwise.
In a title-cased string, upper- and title-case characters may only follow
uncased characters and lowercase characters only cased ones.
isupper()¶
Return True if the string is an uppercase string, False otherwise.
A string is uppercase if all cased characters in the string are uppercase and
there is at least one cased character in the string.
join(_iterable_ , _/_)¶
Concatenate any number of strings.
The string whose method is called is inserted in between each given string.
The result is returned as a new string.
Example: ‘.’.join([‘ab’, ‘pq’, ‘rs’]) -> ‘ab.pq.rs’
ljust(_width_ , _fillchar =' '_, _/_)¶
Return a left-justified string of length width.
Padding is done using the specified fill character (default is a space).
lower()¶
Return a copy of the string converted to lowercase.
lstrip(_chars =None_, _/_)¶
Return a copy of the string with leading whitespace removed.
If chars is given and not None, remove characters in chars instead.
_static _maketrans()¶
Return a translation table usable for str.translate().
If there is only one argument, it must be a dictionary mapping Unicode
ordinals (integers) or characters to Unicode ordinals, strings or None.
Character keys will be then converted to ordinals. If there are two arguments,
they must be strings of equal length, and in the resulting dictionary, each
character in x will be mapped to the character at the same position in y. If
there is a third argument, it must be a string, whose characters will be
mapped to None in the result.
partition(_sep_ , _/_)¶
Partition the string into three parts using the given separator.
This will search for the separator in the string. If the separator is found,
returns a 3-tuple containing the part before the separator, the separator
itself, and the part after it.
If the separator is not found, returns a 3-tuple containing the original
string and two empty strings.
removeprefix(_prefix_ , _/_)¶
Return a str with the given prefix string removed if present.
If the string starts with the prefix string, return string[len(prefix):].
Otherwise, return a copy of the original string.
removesuffix(_suffix_ , _/_)¶
Return a str with the given suffix string removed if present.
If the string ends with the suffix string and that suffix is not empty, return
string[:-len(suffix)]. Otherwise, return a copy of the original string.
replace(_old_ , _new_ , _count =-1_, _/_)¶
Return a copy with all occurrences of substring old replaced by new.
> count
>
>
> Maximum number of occurrences to replace. -1 (the default value) means
> replace all occurrences.
If the optional argument count is given, only the first count occurrences are
replaced.
rfind(_sub_[, _start_[, _end_]]) → int¶
Return the highest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Return -1 on failure.
rindex(_sub_[, _start_[, _end_]]) → int¶
Return the highest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Raises ValueError when the substring is not found.
rjust(_width_ , _fillchar =' '_, _/_)¶
Return a right-justified string of length width.
Padding is done using the specified fill character (default is a space).
rpartition(_sep_ , _/_)¶
Partition the string into three parts using the given separator.
This will search for the separator in the string, starting at the end. If the
separator is found, returns a 3-tuple containing the part before the
separator, the separator itself, and the part after it.
If the separator is not found, returns a 3-tuple containing two empty strings
and the original string.
rsplit(_sep =None_, _maxsplit =-1_)¶
Return a list of the substrings in the string, using sep as the separator
string.
> sep
>
>
> The separator used to split the string.
>
> When set to None (the default value), will split on any whitespace character
> (including n r t f and spaces) and will discard empty strings from the
> result.
>
> maxsplit
>
>
> Maximum number of splits. -1 (the default value) means no limit.
Splitting starts at the end of the string and works to the front.
rstrip(_chars =None_, _/_)¶
Return a copy of the string with trailing whitespace removed.
If chars is given and not None, remove characters in chars instead.
split(_sep =None_, _maxsplit =-1_)¶
Return a list of the substrings in the string, using sep as the separator
string.
> sep
>
>
> The separator used to split the string.
>
> When set to None (the default value), will split on any whitespace character
> (including n r t f and spaces) and will discard empty strings from the
> result.
>
> maxsplit
>
>
> Maximum number of splits. -1 (the default value) means no limit.
Splitting starts at the front of the string and works to the end.
Note, str.split() is mainly useful for data that has been intentionally
delimited. With natural text that includes punctuation, consider using the
regular expression module.
splitlines(_keepends =False_)¶
Return a list of the lines in the string, breaking at line boundaries.
Line breaks are not included in the resulting list unless keepends is given
and true.
startswith(_prefix_[, _start_[, _end_]]) → bool¶
Return True if S starts with the specified prefix, False otherwise. With
optional start, test S beginning at that position. With optional end, stop
comparing S at that position. prefix can also be a tuple of strings to try.
strip(_chars =None_, _/_)¶
Return a copy of the string with leading and trailing whitespace removed.
If chars is given and not None, remove characters in chars instead.
swapcase()¶
Convert uppercase characters to lowercase and lowercase characters to
uppercase.
title()¶
Return a version of the string where each word is titlecased.
More specifically, words start with uppercased characters and all remaining
cased characters have lower case.
translate(_table_ , _/_)¶
Replace each character in the string using the given translation table.
> table
>
>
> Translation table, which must be a mapping of Unicode ordinals to Unicode
> ordinals, strings, or None.
The table must implement lookup/indexing via __getitem__, for instance a
dictionary or list. If this operation raises LookupError, the character is
left untouched. Characters mapped to None are deleted.
upper()¶
Return a copy of the string converted to uppercase.
zfill(_width_ , _/_)¶
Pad a numeric string with zeros on the left, to fill a field of the given
width.
The string is never truncated.
COMMITTED _ = 'Committed'_¶
Committed blocks.
LATEST _ = 'Latest'_¶
Latest blocks.
UNCOMMITTED _ = 'Uncommitted'_¶
Uncommitted blocks.
_class _azure.storage.blob.ContainerClient(_account_url : str_, _container_name : str_, _credential : str | Dict[str, str] | AzureNamedKeyCredential | AzureSasCredential | TokenCredential | None = None_, _** kwargs: Any_)[source]¶
A client to interact with a specific container, although that container may
not yet exist.
For operations relating to a specific blob within this container, a blob
client can be retrieved using the `get_blob_client()` function.
For more optional configuration, please click here.
Parameters:
* **account_url** (_str_) – The URI to the storage account. In order to create a client given the full URI to the container, use the `from_container_url()` classmethod.
* **container_name** (_str_) – The name of the container for the blob.
* **credential** – The credentials with which to authenticate. This is optional if the account URL already has a SAS token. The value can be a SAS token string, an instance of a AzureSasCredential or AzureNamedKeyCredential from azure.core.credentials, an account shared access key, or an instance of a TokenCredentials class from azure.identity. If the resource URI already contains a SAS token, this will be ignored in favor of an explicit credential \- except in the case of AzureSasCredential, where the conflicting SAS tokens will raise a ValueError. If using an instance of AzureNamedKeyCredential, “name” should be the storage account name, and “key” should be the storage account key.
Keyword Arguments:
* **api_version** (_str_) –
The Storage API version to use for requests. Default value is the most recent
service version that is compatible with the current SDK. Setting to an older
version may result in reduced feature compatibility.
Added in version 12.2.0.
* **secondary_hostname** (_str_) – The hostname of the secondary endpoint.
* **max_block_size** (_int_) – The maximum chunk size for uploading a block blob in chunks. Defaults to 4*1024*1024, or 4MB.
* **max_single_put_size** (_int_) – If the blob size is less than or equal max_single_put_size, then the blob will be uploaded with only one http PUT request. If the blob size is larger than max_single_put_size, the blob will be uploaded in chunks. Defaults to 64*1024*1024, or 64MB.
* **min_large_block_upload_threshold** (_int_) – The minimum chunk size required to use the memory efficient algorithm when uploading a block blob. Defaults to 4*1024*1024+1.
* **use_byte_buffer** (_bool_) – Use a byte buffer for block blob uploads. Defaults to False.
* **max_page_size** (_int_) – The maximum chunk size for uploading a page blob. Defaults to 4*1024*1024, or 4MB.
* **max_single_get_size** (_int_) – The maximum size for a blob to be downloaded in a single call, the exceeded part will be downloaded in chunks (could be parallel). Defaults to 32*1024*1024, or 32MB.
* **max_chunk_get_size** (_int_) – The maximum chunk size used for downloading a blob. Defaults to 4*1024*1024, or 4MB.
* **audience** (_str_) – The audience to use when requesting tokens for Azure Active Directory authentication. Only has an effect when credential is of type TokenCredential. The value could be https://storage.azure.com/ (default) or https://<account>.blob.core.windows.net.
Example:
Get a ContainerClient from an existing BlobServiceClient.¶
# Instantiate a BlobServiceClient using a connection string
from azure.storage.blob import BlobServiceClient
blob_service_client = BlobServiceClient.from_connection_string(self.connection_string)
# Instantiate a ContainerClient
container_client = blob_service_client.get_container_client("mynewcontainer")
Creating the container client directly.¶
from azure.storage.blob import ContainerClient
sas_url = "https://account.blob.core.windows.net/mycontainer?sv=2015-04-05&st=2015-04-29T22%3A18%3A26Z&se=2015-04-30T02%3A23%3A26Z&sr=b&sp=rw&sip=168.1.5.60-168.1.5.70&spr=https&sig=Z%2FRHIX5Xcg0Mq2rqI3OlWTjEg2tYkboXr1P9ZUXDtkk%3D"
container = ContainerClient.from_container_url(sas_url)
acquire_lease(_lease_duration : int = -1_, _lease_id : str | None = None_, _** kwargs: Any_) → BlobLeaseClient[source]¶
Requests a new lease. If the container does not have an active lease, the Blob
service creates a lease on the container and returns a new lease ID.
Parameters:
* **lease_duration** (_int_) – Specifies the duration of the lease, in seconds, or negative one (-1) for a lease that never expires. A non-infinite lease can be between 15 and 60 seconds. A lease duration cannot be changed using renew or change. Default is -1 (infinite lease).
* **lease_id** (_str_) – Proposed lease ID, in a GUID string format. The Blob service returns 400 (Invalid request) if the proposed lease ID is not in the correct format.
Keyword Arguments:
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **etag** (_str_) – An ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **match_condition** (_MatchConditions_) – The match condition to use upon the etag.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
A BlobLeaseClient object, that can be run in a context manager.
Return type:
_BlobLeaseClient_
Example:
Acquiring a lease on the container.¶
# Acquire a lease on the container
lease = container_client.acquire_lease()
# Delete container by passing in the lease
container_client.delete_container(lease=lease)
close()¶
This method is to close the sockets opened by the client. It need not be used
when using with a context manager.
create_container(_metadata : Dict[str, str] | None = None_, _public_access : PublicAccess | str | None = None_, _** kwargs: Any_) → Dict[str, str | datetime][source]¶
Creates a new container under the specified account. If the container with the
same name already exists, the operation fails.
Parameters:
* **metadata** (_dict_ _[__str_ _,__str_ _]_) – A dict with name_value pairs to associate with the container as metadata. Example:{‘Category’:’test’}
* **public_access** (_PublicAccess_) – Possible values include: ‘container’, ‘blob’.
Keyword Arguments:
* **container_encryption_scope** (_dict_ _or_ _ContainerEncryptionScope_) –
Specifies the default encryption scope to set on the container and use for all
future writes.
Added in version 12.2.0.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
A dictionary of response headers.
Return type:
Dict[str, Union[str, datetime]]
Example:
Creating a container to store blobs.¶
container_client.create_container()
delete_blob(_blob : str_, _delete_snapshots : str | None = None_, _** kwargs: Any_) → None[source]¶
Marks the specified blob or snapshot for deletion.
The blob is later deleted during garbage collection. Note that in order to
delete a blob, you must delete all of its snapshots. You can delete both at
the same time with the delete_blob operation.
If a delete retention policy is enabled for the service, then this operation
soft deletes the blob or snapshot and retains the blob or snapshot for
specified number of days. After specified number of days, blob’s data is
removed from the service during garbage collection. Soft deleted blob or
snapshot is accessible through `list_blobs()` specifying include=[“deleted”]
option. Soft-deleted blob or snapshot can be restored using `undelete()`
Parameters:
* **blob** (_str_) – The blob with which to interact.
* **delete_snapshots** (_str_) –
Required if the blob has associated snapshots. Values include:
* ”only”: Deletes only the blobs snapshots.
* ”include”: Deletes the blob along with all snapshots.
Keyword Arguments:
* **version_id** (_str_) –
The version id parameter is an opaque DateTime value that, when present,
specifies the version of the blob to delete.
Added in version 12.4.0.
This keyword argument was introduced in API version ‘2019-12-12’.
* **lease** (_BlobLeaseClient_ _or_ _str_) – Required if the blob has an active lease. Value can be a BlobLeaseClient object or the lease ID as a string.
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **etag** (_str_) – An ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **match_condition** (_MatchConditions_) – The match condition to use upon the etag.
* **if_tags_match_condition** (_str_) –
Specify a SQL where clause on blob tags to operate only on blob with a
matching value. eg. `"\"tagname\"='my tag'"`
Added in version 12.4.0.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Return type:
None
delete_blobs(_* blobs: str | Dict[str, Any] | BlobProperties_, _** kwargs: Any_) → Iterator[HttpResponse][source]¶
Marks the specified blobs or snapshots for deletion.
The blobs are later deleted during garbage collection. Note that in order to
delete blobs, you must delete all of their snapshots. You can delete both at
the same time with the delete_blobs operation.
If a delete retention policy is enabled for the service, then this operation
soft deletes the blobs or snapshots and retains the blobs or snapshots for
specified number of days. After specified number of days, blobs’ data is
removed from the service during garbage collection. Soft deleted blobs or
snapshots are accessible through `list_blobs()` specifying include=[“deleted”]
Soft-deleted blobs or snapshots can be restored using `undelete()`
The maximum number of blobs that can be deleted in a single request is 256.
Parameters:
**blobs** (_Union_ _[__str_ _,__Dict_ _[__str_ _,__Any_ _]__,__BlobProperties_
_]_) –
The blobs to delete. This can be a single blob, or multiple values can be
supplied, where each value is either the name of the blob (str) or
BlobProperties.
Note
When the blob type is dict, here’s a list of keys, value rules.
blob name:
key: ‘name’, value type: str
snapshot you want to delete:
key: ‘snapshot’, value type: str
version id:
key: ‘version_id’, value type: str
whether to delete snapshots when deleting blob:
key: ‘delete_snapshots’, value: ‘include’ or ‘only’
if the blob modified or not:
key: ‘if_modified_since’, ‘if_unmodified_since’, value type: datetime
etag:
key: ‘etag’, value type: str
match the etag or not:
key: ‘match_condition’, value type: MatchConditions
tags match condition:
key: ‘if_tags_match_condition’, value type: str
lease:
key: ‘lease_id’, value type: Union[str, LeaseClient]
timeout for subrequest:
key: ‘timeout’, value type: int
Keyword Arguments:
* **delete_snapshots** (_str_) –
Required if a blob has associated snapshots. Values include:
* ”only”: Deletes only the blobs snapshots.
* ”include”: Deletes the blob along with all snapshots.
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **if_tags_match_condition** (_str_) –
Specify a SQL where clause on blob tags to operate only on blob with a
matching value. eg. `"\"tagname\"='my tag'"`
Added in version 12.4.0.
* **raise_on_any_failure** (_bool_) – This is a boolean param which defaults to True. When this is set, an exception is raised even if there is a single operation failure.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
An iterator of responses, one for each blob in order
Return type:
Iterator[_HttpResponse_]
Example:
Deleting multiple blobs.¶
# Delete multiple blobs in the container by name
container_client.delete_blobs("my_blob1", "my_blob2")
# Delete multiple blobs by properties iterator
my_blobs = container_client.list_blobs(name_starts_with="my_blob")
container_client.delete_blobs(*my_blobs)
delete_container(_** kwargs: Any_) → None[source]¶
Marks the specified container for deletion. The container and any blobs
contained within it are later deleted during garbage collection.
Keyword Arguments:
* **lease** (_BlobLeaseClient_ _or_ _str_) – If specified, delete_container only succeeds if the container’s lease is active and matches this ID. Required if the container has an active lease.
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **etag** (_str_) – An ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **match_condition** (_MatchConditions_) – The match condition to use upon the etag.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Return type:
None
Example:
Delete a container.¶
container_client.delete_container()
download_blob(_blob : str_, _offset : int | None = None_, _length : int | None = None_, _*_ , _encoding : str_, _** kwargs: Any_) → StorageStreamDownloader[str][source]¶
download_blob(_blob : str_, _offset : int | None = None_, _length : int | None = None_, _*_ , _encoding : None = None_, _** kwargs: Any_) → StorageStreamDownloader[bytes]
Downloads a blob to the StorageStreamDownloader. The readall() method must be
used to read all the content or readinto() must be used to download the blob
into a stream. Using chunks() returns an iterator which allows the user to
iterate over the content in chunks.
Parameters:
* **blob** (_str_) – The blob with which to interact.
* **offset** (_int_) – Start of byte range to use for downloading a section of the blob. Must be set if length is provided.
* **length** (_int_) – Number of bytes to read from the stream. This is optional, but should be supplied for optimal performance.
Keyword Arguments:
* **version_id** (_str_) –
The version id parameter is an opaque DateTime value that, when present,
specifies the version of the blob to download.
Added in version 12.4.0.
This keyword argument was introduced in API version ‘2019-12-12’.
* **validate_content** (_bool_) – If true, calculates an MD5 hash for each chunk of the blob. The storage service checks the hash of the content that has arrived with the hash that was sent. This is primarily valuable for detecting bitflips on the wire if using http instead of https, as https (the default), will already validate. Note that this MD5 hash is not stored with the blob. Also note that if enabled, the memory-efficient upload algorithm will not be used because computing the MD5 hash requires buffering entire blocks, and doing so defeats the purpose of the memory-efficient algorithm.
* **lease** (_BlobLeaseClient_ _or_ _str_) – Required if the blob has an active lease. If specified, download_blob only succeeds if the blob’s lease is active and matches this ID. Value can be a BlobLeaseClient object or the lease ID as a string.
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **etag** (_str_) – An ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **match_condition** (_MatchConditions_) – The match condition to use upon the etag.
* **if_tags_match_condition** (_str_) –
Specify a SQL where clause on blob tags to operate only on blob with a
matching value. eg. `"\"tagname\"='my tag'"`
Added in version 12.4.0.
* **cpk** (_CustomerProvidedEncryptionKey_) – Encrypts the data on the service-side with the given key. Use of customer-provided keys must be done over HTTPS. As the encryption key itself is provided in the request, a secure connection must be established to transfer the key.
* **max_concurrency** (_int_) – The number of parallel connections with which to download.
* **encoding** (_str_) – Encoding to decode the downloaded bytes. Default is None, i.e. no decoding.
* **progress_hook** (_Callable_ _[__[__int_ _,__int_ _]__,__None_ _]_) – A callback to track the progress of a long running download. The signature is function(current: int, total: int) where current is the number of bytes transferred so far, and total is the total size of the download.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here. This method may make multiple calls to the service and the timeout will apply to each call individually. multiple calls to the Azure service and the timeout will apply to each call individually.
Returns:
A streaming object (StorageStreamDownloader)
Return type:
_StorageStreamDownloader_
exists(_** kwargs: Any_) → bool[source]¶
Returns True if a container exists and returns False otherwise.
Keyword Arguments:
**timeout** (_int_) – Sets the server-side timeout for the operation in
seconds. For more details see
https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-
blob-service-operations. This value is not tracked or validated on the client.
To configure client-side network timesouts see here.
Returns:
boolean
Return type:
bool
find_blobs_by_tags(_filter_expression : str_, _** kwargs: Any_) →
ItemPaged[FilteredBlob][source]¶
Returns a generator to list the blobs under the specified container whose tags
match the given search expression. The generator will lazily follow the
continuation tokens returned by the service.
Parameters:
**filter_expression** (_str_) – The expression to find blobs whose tags
matches the specified condition. eg. “”yourtagname”=’firsttag’ and
“yourtagname2”=’secondtag’”
Keyword Arguments:
* **results_per_page** (_int_) – The max result per page when paginating.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
An iterable (auto-paging) response of FilteredBlob.
Return type:
_ItemPaged_[_BlobProperties_]
_classmethod _from_connection_string(_conn_str : str_, _container_name : str_, _credential : str | Dict[str, str] | AzureNamedKeyCredential | AzureSasCredential | TokenCredential | None = None_, _** kwargs: Any_) → Self[source]¶
Create ContainerClient from a Connection String.
Parameters:
* **conn_str** (_str_) – A connection string to an Azure Storage account.
* **container_name** (_str_) – The container name for the blob.
* **credential** (_AzureNamedKeyCredential_ _or_ _AzureSasCredential_ _or_ _TokenCredential_ _or_ _str_ _or_ _dict_ _[__str_ _,__str_ _] or_ _None_) – The credentials with which to authenticate. This is optional if the account URL already has a SAS token, or the connection string already has shared access key values. The value can be a SAS token string, an instance of a AzureSasCredential or AzureNamedKeyCredential from azure.core.credentials, an account shared access key, or an instance of a TokenCredentials class from azure.identity. Credentials provided here will take precedence over those in the connection string. If using an instance of AzureNamedKeyCredential, “name” should be the storage account name, and “key” should be the storage account key.
Keyword Arguments:
**audience** (_str_) – The audience to use when requesting tokens for Azure
Active Directory authentication. Only has an effect when credential is of type
TokenCredential. The value could be https://storage.azure.com/ (default) or
https://<account>.blob.core.windows.net.
Returns:
A container client.
Return type:
_ContainerClient_
Example:
Creating the ContainerClient from a connection string.¶
from azure.storage.blob import ContainerClient
container_client = ContainerClient.from_connection_string(
self.connection_string, container_name="mycontainer")
_classmethod _from_container_url(_container_url : str_, _credential : str | Dict[str, str] | AzureNamedKeyCredential | AzureSasCredential | TokenCredential | None = None_, _** kwargs: Any_) → Self[source]¶
Create ContainerClient from a container url.
Parameters:
* **container_url** (_str_) – The full endpoint URL to the Container, including SAS token if used. This could be either the primary endpoint, or the secondary endpoint depending on the current location_mode.
* **credential** (_AzureNamedKeyCredential_ _or_ _AzureSasCredential_ _or_ _TokenCredential_ _or_ _str_ _or_ _dict_ _[__str_ _,__str_ _] or_ _None_) – The credentials with which to authenticate. This is optional if the account URL already has a SAS token, or the connection string already has shared access key values. The value can be a SAS token string, an instance of a AzureSasCredential or AzureNamedKeyCredential from azure.core.credentials, an account shared access key, or an instance of a TokenCredentials class from azure.identity. If the resource URI already contains a SAS token, this will be ignored in favor of an explicit credential \- except in the case of AzureSasCredential, where the conflicting SAS tokens will raise a ValueError. If using an instance of AzureNamedKeyCredential, “name” should be the storage account name, and “key” should be the storage account key.
Keyword Arguments:
**audience** (_str_) – The audience to use when requesting tokens for Azure
Active Directory authentication. Only has an effect when credential is of type
TokenCredential. The value could be https://storage.azure.com/ (default) or
https://<account>.blob.core.windows.net.
Returns:
A container client.
Return type:
_ContainerClient_
get_account_information(_** kwargs: Any_) → Dict[str, str][source]¶
Gets information related to the storage account.
The information can also be retrieved if the user has a SAS to a container or
blob. The keys in the returned dictionary include ‘sku_name’ and
‘account_kind’.
Returns:
A dict of account information (SKU and account type).
Return type:
dict(str, str)
get_blob_client(_blob : str_, _snapshot : str | None = None_, _*_ , _version_id : str | None = None_) → BlobClient[source]¶
Get a client to interact with the specified blob.
The blob need not already exist.
Parameters:
* **blob** (_str_) – The blob with which to interact.
* **snapshot** (_str_) – The optional blob snapshot on which to operate. This can be the snapshot ID string or the response returned from `create_snapshot()`.
Keyword Arguments:
**version_id** (_str_) – The version id parameter is an opaque DateTime value
that, when present, specifies the version of the blob to operate on.
Returns:
A BlobClient.
Return type:
_BlobClient_
Example:
Get the blob client.¶
# Get the BlobClient from the ContainerClient to interact with a specific blob
blob_client = container_client.get_blob_client("mynewblob")
get_container_access_policy(_** kwargs: Any_) → Dict[str, Any][source]¶
Gets the permissions for the specified container. The permissions indicate
whether container data may be accessed publicly.
Keyword Arguments:
* **lease** (_BlobLeaseClient_ _or_ _str_) – If specified, get_container_access_policy only succeeds if the container’s lease is active and matches this ID.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
Access policy information in a dict.
Return type:
dict[str, Any]
Example:
Getting the access policy on the container.¶
policy = container_client.get_container_access_policy()
get_container_properties(_** kwargs: Any_) → ContainerProperties[source]¶
Returns all user-defined metadata and system properties for the specified
container. The data returned does not include the container’s list of blobs.
Keyword Arguments:
* **lease** (_BlobLeaseClient_ _or_ _str_) – If specified, get_container_properties only succeeds if the container’s lease is active and matches this ID.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
Properties for the specified container within a container object.
Return type:
_ContainerProperties_
Example:
Getting properties on the container.¶
properties = container_client.get_container_properties()
list_blob_names(_** kwargs: Any_) → ItemPaged[str][source]¶
Returns a generator to list the names of blobs under the specified container.
The generator will lazily follow the continuation tokens returned by the
service.
Note that no additional properties or metadata will be returned when using
this API. Additionally, this API does not have an option to include additional
blobs such as snapshots, versions, soft-deleted blobs, etc. To get any of this
data, use `list_blobs()`.
Keyword Arguments:
* **name_starts_with** (_str_) – Filters the results to return only blobs whose names begin with the specified prefix.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
An iterable (auto-paging) response of blob names as strings.
Return type:
_ItemPaged_[str]
list_blobs(_name_starts_with : str | None = None_, _include : str | List[str] | None = None_, _** kwargs: Any_) → ItemPaged[BlobProperties][source]¶
Returns a generator to list the blobs under the specified container. The
generator will lazily follow the continuation tokens returned by the service.
Parameters:
* **name_starts_with** (_str_) – Filters the results to return only blobs whose names begin with the specified prefix.
* **include** (_list_ _[__str_ _] or_ _str_) – Specifies one or more additional datasets to include in the response. Options include: ‘snapshots’, ‘metadata’, ‘uncommittedblobs’, ‘copy’, ‘deleted’, ‘deletedwithversions’, ‘tags’, ‘versions’, ‘immutabilitypolicy’, ‘legalhold’.
Keyword Arguments:
**timeout** (_int_) – Sets the server-side timeout for the operation in
seconds. For more details see
https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-
blob-service-operations. This value is not tracked or validated on the client.
To configure client-side network timesouts see here.
Returns:
An iterable (auto-paging) response of BlobProperties.
Return type:
_ItemPaged_[_BlobProperties_]
Example:
List the blobs in the container.¶
blobs_list = container_client.list_blobs()
for blob in blobs_list:
print(blob.name + '\n')
set_container_access_policy(_signed_identifiers : Dict[str, AccessPolicy]_, _public_access : PublicAccess | str | None = None_, _** kwargs: Any_) → Dict[str, str | datetime][source]¶
Sets the permissions for the specified container or stored access policies
that may be used with Shared Access Signatures. The permissions indicate
whether blobs in a container may be accessed publicly.
Parameters:
* **signed_identifiers** (_dict_ _[__str_ _,__AccessPolicy_ _]_) – A dictionary of access policies to associate with the container. The dictionary may contain up to 5 elements. An empty dictionary will clear the access policies set on the service.
* **public_access** (_PublicAccess_) – Possible values include: ‘container’, ‘blob’.
Keyword Arguments:
* **lease** (_BlobLeaseClient_ _or_ _str_) – Required if the container has an active lease. Value can be a BlobLeaseClient object or the lease ID as a string.
* **if_modified_since** (_datetime_) – A datetime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified date/time.
* **if_unmodified_since** (_datetime_) – A datetime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
Container-updated property dict (Etag and last modified).
Return type:
dict[str, str or _datetime_]
Example:
Setting access policy on the container.¶
# Create access policy
from azure.storage.blob import AccessPolicy, ContainerSasPermissions
access_policy = AccessPolicy(permission=ContainerSasPermissions(read=True),
expiry=datetime.utcnow() + timedelta(hours=1),
start=datetime.utcnow() - timedelta(minutes=1))
identifiers = {'test': access_policy}
# Set the access policy on the container
container_client.set_container_access_policy(signed_identifiers=identifiers)
set_container_metadata(_metadata : Dict[str, str] | None = None_, _** kwargs: Any_) → Dict[str, str | datetime][source]¶
Sets one or more user-defined name-value pairs for the specified container.
Each call to this operation replaces all existing metadata attached to the
container. To remove all metadata from the container, call this operation with
no metadata dict.
Parameters:
**metadata** (_dict_ _[__str_ _,__str_ _]_) – A dict containing name-value
pairs to associate with the container as metadata. Example:
{‘category’:’test’}
Keyword Arguments:
* **lease** (_BlobLeaseClient_ _or_ _str_) – If specified, set_container_metadata only succeeds if the container’s lease is active and matches this ID.
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **etag** (_str_) – An ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
Returns:
Container-updated property dict (Etag and last modified).
Return type:
dict[str, str or datetime]
Example:
Setting metadata on the container.¶
# Create key, value pairs for metadata
metadata = {'type': 'test'}
# Set metadata on the container
container_client.set_container_metadata(metadata=metadata)
set_premium_page_blob_tier_blobs(_premium_page_blob_tier : str | PremiumPageBlobTier | None_, _* blobs: str | Dict[str, Any] | BlobProperties_, _** kwargs: Any_) → Iterator[HttpResponse][source]¶
Sets the page blob tiers on all blobs. This API is only supported for page
blobs on premium accounts.
The maximum number of blobs that can be updated in a single request is 256.
Parameters:
* **premium_page_blob_tier** (_PremiumPageBlobTier_) –
A page blob tier value to set the blob to. The tier correlates to the size of
the blob and number of allowed IOPS. This is only applicable to page blobs on
premium storage accounts.
Note
If you want to set different tier on different blobs please set this
positional parameter to None. Then the blob tier on every BlobProperties will
be taken.
* **blobs** (_str_ _or_ _dict_ _(__str_ _,__Any_ _) or_ _BlobProperties_) –
The blobs with which to interact. This can be a single blob, or multiple
values can be supplied, where each value is either the name of the blob (str)
or BlobProperties.
Note
When the blob type is dict, here’s a list of keys, value rules.
blob name:
key: ‘name’, value type: str
premium blob tier:
key: ‘blob_tier’, value type: PremiumPageBlobTier
lease:
key: ‘lease_id’, value type: Union[str, LeaseClient]
timeout for subrequest:
key: ‘timeout’, value type: int
Keyword Arguments:
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
* **raise_on_any_failure** (_bool_) – This is a boolean param which defaults to True. When this is set, an exception is raised even if there is a single operation failure.
Returns:
An iterator of responses, one for each blob in order
Return type:
Iterator[_HttpResponse_]
set_standard_blob_tier_blobs(_standard_blob_tier : str | StandardBlobTier | None_, _* blobs: str | Dict[str, Any] | BlobProperties_, _** kwargs: Any_) → Iterator[HttpResponse][source]¶
This operation sets the tier on block blobs.
A block blob’s tier determines Hot/Cool/Archive storage type. This operation
does not update the blob’s ETag.
The maximum number of blobs that can be updated in a single request is 256.
Parameters:
* **standard_blob_tier** (_str_ _or_ _StandardBlobTier_) –
Indicates the tier to be set on all blobs. Options include ‘Hot’, ‘Cool’,
‘Archive’. The hot tier is optimized for storing data that is accessed
frequently. The cool storage tier is optimized for storing data that is
infrequently accessed and stored for at least a month. The archive tier is
optimized for storing data that is rarely accessed and stored for at least six
months with flexible latency requirements.
Note
If you want to set different tier on different blobs please set this
positional parameter to None. Then the blob tier on every BlobProperties will
be taken.
* **blobs** (_str_ _or_ _dict_ _(__str_ _,__Any_ _) or_ _BlobProperties_) –
The blobs with which to interact. This can be a single blob, or multiple
values can be supplied, where each value is either the name of the blob (str)
or BlobProperties.
Note
When the blob type is dict, here’s a list of keys, value rules.
blob name:
key: ‘name’, value type: str
standard blob tier:
key: ‘blob_tier’, value type: StandardBlobTier
rehydrate priority:
key: ‘rehydrate_priority’, value type: RehydratePriority
lease:
key: ‘lease_id’, value type: Union[str, LeaseClient]
snapshot:
key: “snapshot”, value type: str
version id:
key: “version_id”, value type: str
tags match condition:
key: ‘if_tags_match_condition’, value type: str
timeout for subrequest:
key: ‘timeout’, value type: int
Keyword Arguments:
* **rehydrate_priority** (_RehydratePriority_) – Indicates the priority with which to rehydrate an archived blob
* **if_tags_match_condition** (_str_) –
Specify a SQL where clause on blob tags to operate only on blob with a
matching value. eg. `"\"tagname\"='my tag'"`
Added in version 12.4.0.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here.
* **raise_on_any_failure** (_bool_) – This is a boolean param which defaults to True. When this is set, an exception is raised even if there is a single operation failure.
Returns:
An iterator of responses, one for each blob in order
Return type:
Iterator[_HttpResponse_]
upload_blob(_name : str_, _data : bytes | str | Iterable | IO_, _blob_type : str | BlobType = BlobType.BLOCKBLOB_, _length : int | None = None_, _metadata : Dict[str, str] | None = None_, _** kwargs_) → BlobClient[source]¶
Creates a new blob from a data source with automatic chunking.
Parameters:
* **name** (_str_) – The blob with which to interact.
* **data** (_Union_ _[__bytes_ _,__str_ _,__Iterable_ _[__AnyStr_ _]__,__IO_ _[__AnyStr_ _]__]_) – The blob data to upload.
* **blob_type** (_BlobType_) – The type of the blob. This can be either BlockBlob, PageBlob or AppendBlob. The default value is BlockBlob.
* **length** (_int_) – Number of bytes to read from the stream. This is optional, but should be supplied for optimal performance.
* **metadata** (_dict_ _(__str_ _,__str_ _)_) – Name-value pairs associated with the blob as metadata.
Keyword Arguments:
* **overwrite** (_bool_) – Whether the blob to be uploaded should overwrite the current data. If True, upload_blob will overwrite the existing data. If set to False, the operation will fail with ResourceExistsError. The exception to the above is with Append blob types: if set to False and the data already exists, an error will not be raised and the data will be appended to the existing blob. If set overwrite=True, then the existing append blob will be deleted, and a new one created. Defaults to False.
* **content_settings** (_ContentSettings_) – ContentSettings object used to set blob properties. Used to set content type, encoding, language, disposition, md5, and cache control.
* **validate_content** (_bool_) – If true, calculates an MD5 hash for each chunk of the blob. The storage service checks the hash of the content that has arrived with the hash that was sent. This is primarily valuable for detecting bitflips on the wire if using http instead of https, as https (the default), will already validate. Note that this MD5 hash is not stored with the blob. Also note that if enabled, the memory-efficient upload algorithm will not be used, because computing the MD5 hash requires buffering entire blocks, and doing so defeats the purpose of the memory-efficient algorithm.
* **lease** (_BlobLeaseClient_ _or_ _str_) – Required if the container has an active lease. Value can be a BlobLeaseClient object or the lease ID as a string.
* **if_modified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has been modified since the specified time.
* **if_unmodified_since** (_datetime_) – A DateTime value. Azure expects the date value passed in to be UTC. If timezone is included, any non-UTC datetimes will be converted to UTC. If a date is passed in without timezone info, it is assumed to be UTC. Specify this header to perform the operation only if the resource has not been modified since the specified date/time.
* **etag** (_str_) – An ETag value, or the wildcard character (*). Used to check if the resource has changed, and act according to the condition specified by the match_condition parameter.
* **match_condition** (_MatchConditions_) – The match condition to use upon the etag.
* **if_tags_match_condition** (_str_) –
Specify a SQL where clause on blob tags to operate only on blob with a
matching value. eg. `"\"tagname\"='my tag'"`
Added in version 12.4.0.
* **timeout** (_int_) – Sets the server-side timeout for the operation in seconds. For more details see https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-blob-service-operations. This value is not tracked or validated on the client. To configure client-side network timesouts see here. This method may make multiple calls to the service and the timeout will apply to each call individually.
* **premium_page_blob_tier** (_PremiumPageBlobTier_) – A page blob tier value to set the blob to. The tier correlates to the size of the blob and number of allowed IOPS. This is only applicable to page blobs on premium storage accounts.
* **standard_blob_tier** (_StandardBlobTier_) – A standard blob tier value to set the blob to. For this version of the library, this is only applicable to block blobs on standard storage accounts.
* **maxsize_condition** (_int_) – Optional conditional header. The max length in bytes permitted for the append blob. If the Append Block operation would cause the blob to exceed that limit or if the blob size is already greater than the value specified in this header, the request will fail with MaxBlobSizeConditionNotMet error (HTTP status code 412 - Precondition Failed).
* **max_concurrency** (_int_) – Maximum number of parallel connections to use when the blob size exceeds 64MB.
* **cpk** (_CustomerProvidedEncryptionKey_) – Encrypts the data on the service-side with the given key. Use of customer-provided keys must be done over HTTPS. As the encryption key itself is provided in the request, a secure connection must be established to transfer the key.
* **encryption_scope** (_str_) –
A predefined encryption scope used to encrypt the data on the service. An
encryption scope can be created using the Management API and referenced here
by name. If a default encryption scope has been defined at the container, this
value will override it if the container-level scope is configured to allow
overrides. Otherwise an error will be raised.
Added in version 12.2.0.
* **encoding** (_str_) – Defaults to UTF-8.
* **progress_hook** (_Callable_ _[__[__int_ _,__Optional_ _[__int_ _]__]__,__None_ _]_) – A callback to track the progress of a long running upload. The signature is function(current: int, total: Optional[int]) where current is the number of bytes transferred so far, and total is the size of the blob or None if the size is unknown.
Returns:
A BlobClient to interact with the newly uploaded blob.
Return type:
_BlobClient_
Example:
Upload blob to the container.¶
with open(SOURCE_FILE, "rb") as data:
blob_client = container_client.upload_blob(name="myblob", data=data)
properties = blob_client.get_blob_properties()
walk_blobs(_name_starts_with : str | None = None_, _include : str | List[str] | None = None_, _delimiter : str = '/'_, _** kwargs: Any_) → ItemPaged[BlobProperties][source]¶
Returns a generator to list the blobs under the specified container. The
generator will lazily follow the continuation tokens returned by the service.
This operation will list blobs in accordance with a hierarchy, as delimited by
the specified delimiter character.
Parameters:
* **name_starts_with** (_str_) – Filters the results to return only blobs whose names begin with the specified prefix.
* **include** (_list_ _[__str_ _] or_ _str_) – Specifies one or more additional datasets to include in the response. Options include: ‘snapshots’, ‘metadata’, ‘uncommittedblobs’, ‘copy’, ‘deleted’, ‘deletedwithversions’, ‘tags’, ‘versions’, ‘immutabilitypolicy’, ‘legalhold’.
* **delimiter** (_str_) – When the request includes this parameter, the operation returns a BlobPrefix element in the response body that acts as a placeholder for all blobs whose names begin with the same substring up to the appearance of the delimiter character. The delimiter may be a single character or a string.
Keyword Arguments:
**timeout** (_int_) – Sets the server-side timeout for the operation in
seconds. For more details see
https://learn.microsoft.com/rest/api/storageservices/setting-timeouts-for-
blob-service-operations. This value is not tracked or validated on the client.
To configure client-side network timesouts see here.
Returns:
An iterable (auto-paging) response of BlobProperties.
Return type:
_ItemPaged_[_BlobProperties_]
_property _api_version¶
The version of the Storage API used for requests.
Return type:
str
_property _location_mode¶
The location mode that the client is currently using.
By default this will be “primary”. Options include “primary” and “secondary”.
Return type:
str
_property _primary_endpoint¶
The full primary endpoint URL.
Return type:
str
_property _primary_hostname¶
The hostname of the primary endpoint.
Return type:
str
_property _secondary_endpoint¶
The full secondary endpoint URL if configured.
If not available a ValueError will be raised. To explicitly specify a
secondary hostname, use the optional secondary_hostname keyword argument on
instantiation.
Return type:
str
Raises:
**ValueError** –
_property _secondary_hostname¶
The hostname of the secondary endpoint.
If not available this will be None. To explicitly specify a secondary
hostname, use the optional secondary_hostname keyword argument on
instantiation.
Return type:
Optional[str]
_property _url¶
The full endpoint URL to this entity, including SAS token if used.
This could be either the primary endpoint, or the secondary endpoint depending
on the current `location_mode()`. :returns: The full endpoint URL to this
entity, including SAS token if used. :rtype: str
_class _azure.storage.blob.ContainerEncryptionScope(_default_encryption_scope
: str_, _** kwargs: Any_)[source]¶
The default encryption scope configuration for a container.
This scope is used implicitly for all future writes within the container, but
can be overridden per blob operation.
Added in version 12.2.0.
Parameters:
* **default_encryption_scope** (_str_) – Specifies the default encryption scope to set on the container and use for all future writes.
* **prevent_encryption_scope_override** (_bool_) – If true, prevents any request from specifying a different encryption scope than the scope set on the container. Default value is false.
default_encryption_scope _: str_¶
Specifies the default encryption scope to set on the container and use for all
future writes.
prevent_encryption_scope_override _: bool_¶
If true, prevents any request from specifying a different encryption scope
than the scope set on the container.
_class _azure.storage.blob.ContainerProperties(_** kwargs: Any_)[source]¶
Blob container’s properties class.
Returned `ContainerProperties` instances expose these values through a
dictionary interface, for example: `container_props["last_modified"]`.
Additionally, the container name is available as `container_props["name"]`.
get(_key_ , _default =None_)¶
has_key(_k_)¶
items()¶
keys()¶
update(_* args_, _** kwargs_)¶
values()¶
deleted _: bool | None_¶
Whether this container was deleted.
encryption_scope _: ContainerEncryptionScope | None_¶
The default encryption scope configuration for the container.
etag _: str_¶
The ETag contains a value that you can use to perform operations
conditionally.
has_immutability_policy _: bool_¶
Represents whether the container has an immutability policy.
has_legal_hold _: bool_¶
Represents whether the container has a legal hold.
immutable_storage_with_versioning_enabled _: bool_¶
Represents whether immutable storage with versioning enabled on the container.
last_modified _: datetime_¶
A datetime object representing the last time the container was modified.
lease _: LeaseProperties_¶
Stores all the lease information for the container.
metadata _: Dict[str, Any]_¶
A dict with name-value pairs to associate with the container as metadata.
name _: str_¶
Name of the container.
public_access _: str | None_¶
Specifies whether data in the container may be accessed publicly and the level
of access.
version _: str | None_¶
The version of a deleted container.
_class _azure.storage.blob.ContainerSasPermissions(_read : bool = False_,
_write : bool = False_, _delete : bool = False_, _list : bool = False_,
_delete_previous_version : bool = False_, _tag : bool = False_, _** kwargs:
Any_)[source]¶
ContainerSasPermissions class to be used with the `generate_container_sas()`
function and for the AccessPolicies used with `set_container_access_policy()`.
Parameters:
* **read** (_bool_) – Read the content, properties, metadata or block list of any blob in the container. Use any blob in the container as the source of a copy operation.
* **write** (_bool_) – For any blob in the container, create or write content, properties, metadata, or block list. Snapshot or lease the blob. Resize the blob (page blob only). Use the blob as the destination of a copy operation within the same account. Note: You cannot grant permissions to read or write container properties or metadata, nor to lease a container, with a container SAS. Use an account SAS instead.
* **delete** (_bool_) – Delete any blob in the container. Note: You cannot grant permissions to delete a container with a container SAS. Use an account SAS instead.
* **delete_previous_version** (_bool_) – Delete the previous blob version for the versioning enabled storage account.
* **list** (_bool_) – List blobs in the container.
* **tag** (_bool_) – Set or get tags on the blobs in the container.
Keyword Arguments:
* **add** (_bool_) – Add a block to an append blob.
* **create** (_bool_) – Write a new blob, snapshot a blob, or copy a blob to a new blob.
* **permanent_delete** (_bool_) – To enable permanent delete on the blob is permitted.
* **filter_by_tags** (_bool_) – To enable finding blobs by tags.
* **move** (_bool_) – Move a blob or a directory and its contents to a new location.
* **execute** (_bool_) – Get the system properties and, if the hierarchical namespace is enabled for the storage account, get the POSIX ACL of a blob.
* **set_immutability_policy** (_bool_) – To enable operations related to set/delete immutability policy. To get immutability policy, you just need read permission.
_classmethod _from_string(_permission : str_) →
ContainerSasPermissions[source]¶
Create a ContainerSasPermissions from a string.
To specify read, write, delete, or list permissions you need only to include
the first letter of the word in the string. E.g. For read and write
permissions, you would provide a string “rw”.
Parameters:
**permission** (_str_) – The string which dictates the read, write, delete,
and list permissions.
Returns:
A ContainerSasPermissions object
Return type:
_ContainerSasPermissions_
add _: bool | None_¶
Add a block to an append blob.
create _: bool | None_¶
Write a new blob, snapshot a blob, or copy a blob to a new blob.
delete _: bool_ _ = False_¶
The delete permission for container SAS.
delete_previous_version _: bool_ _ = False_¶
Permission to delete previous blob version for versioning enabled storage
accounts.
execute _: bool | None_¶
Get the system properties and, if the hierarchical namespace is enabled for
the storage account, get the POSIX ACL of a blob.
list _: bool_ _ = False_¶
The list permission for container SAS.
move _: bool | None_¶
Move a blob or a directory and its contents to a new location.
permanent_delete _: bool | None_¶
To enable permanent delete on the blob is permitted.
read _: bool_ _ = False_¶
The read permission for container SAS.
set_immutability_policy _: bool | None_¶
To get immutability policy, you just need read permission.
tag _: bool_ _ = False_¶
Set or get tags on the blobs in the container.
write _: bool_ _ = False_¶
The write permission for container SAS.
_class _azure.storage.blob.ContentSettings(_content_type : str | None = None_, _content_encoding : str | None = None_, _content_language : str | None = None_, _content_disposition : str | None = None_, _cache_control : str | None = None_, _content_md5 : bytearray | None = None_, _** kwargs: Any_)[source]¶
The content settings of a blob.
Parameters:
* **content_type** (_Optional_ _[__str_ _]_) – The content type specified for the blob. If no content type was specified, the default content type is application/octet-stream.
* **content_encoding** (_Optional_ _[__str_ _]_) – If the content_encoding has previously been set for the blob, that value is stored.
* **content_language** (_Optional_ _[__str_ _]_) – If the content_language has previously been set for the blob, that value is stored.
* **content_disposition** (_Optional_ _[__str_ _]_) – content_disposition conveys additional information about how to process the response payload, and also can be used to attach additional metadata. If content_disposition has previously been set for the blob, that value is stored.
* **cache_control** (_Optional_ _[__str_ _]_) – If the cache_control has previously been set for the blob, that value is stored.
* **content_md5** (_Optional_ _[__bytearray_ _]_) – If the content_md5 has been set for the blob, this response header is stored so that the client can check for message content integrity.
get(_key_ , _default =None_)¶
has_key(_k_)¶
items()¶
keys()¶
update(_* args_, _** kwargs_)¶
values()¶
cache_control _: str | None_ _ = None_¶
The cache control specified for the blob.
content_disposition _: str | None_ _ = None_¶
The content disposition specified for the blob.
content_encoding _: str | None_ _ = None_¶
The content encoding specified for the blob.
content_language _: str | None_ _ = None_¶
The content language specified for the blob.
content_md5 _: bytearray | None_ _ = None_¶
The content md5 specified for the blob.
content_type _: str | None_ _ = None_¶
The content type specified for the blob.
_class _azure.storage.blob.CopyProperties(_** kwargs: Any_)[source]¶
Blob Copy Properties.
These properties will be None if this blob has never been the destination in a
Copy Blob operation, or if this blob has been modified after a concluded Copy
Blob operation, for example, using Set Blob Properties, Upload Blob, or Commit
Block List.
get(_key_ , _default =None_)¶
has_key(_k_)¶
items()¶
keys()¶
update(_* args_, _** kwargs_)¶
values()¶
completion_time _: datetime | None_¶
Conclusion time of the last attempted Copy Blob operation where this blob was
the destination blob. This value can specify the time of a completed, aborted,
or failed copy attempt.
destination_snapshot _: datetime | None_¶
Included if the blob is incremental copy blob or incremental copy snapshot, if
x-ms-copy-status is success. Snapshot time of the last successful incremental
copy snapshot for this blob.
id _: str | None_¶
String identifier for the last attempted Copy Blob operation where this blob
was the destination blob.
incremental_copy _: bool | None_¶
Copies the snapshot of the source page blob to a destination page blob. The
snapshot is copied such that only the differential changes between the
previously copied snapshot are transferred to the destination.
progress _: str | None_¶
Contains the number of bytes copied and the total bytes in the source in the
last attempted Copy Blob operation where this blob was the destination blob.
Can show between 0 and Content-Length bytes copied.
source _: str | None_¶
URL up to 2 KB in length that specifies the source blob used in the last
attempted Copy Blob operation where this blob was the destination blob.
status _: str | None_¶
State of the copy operation identified by Copy ID, with these values: success:
Copy completed successfully. pending: Copy is in progress. Check
copy_status_description if intermittent, non-fatal errors impede copy progress
but don’t cause failure. aborted: Copy was ended by Abort Copy Blob. failed:
Copy failed. See copy_status_description for failure details.
status_description _: str | None_¶
Only appears when x-ms-copy-status is failed or pending. Describes cause of
fatal or non-fatal copy operation failure.
_class _azure.storage.blob.CorsRule(_allowed_origins : List[str]_,
_allowed_methods : List[str]_, _** kwargs: Any_)[source]¶
CORS is an HTTP feature that enables a web application running under one
domain to access resources in another domain. Web browsers implement a
security restriction known as same-origin policy that prevents a web page from
calling APIs in a different domain; CORS provides a secure way to allow one
domain (the origin domain) to call APIs in another domain.
Parameters:
* **allowed_origins** (_list_ _(__str_ _)_) – A list of origin domains that will be allowed via CORS, or “*” to allow all domains. The list of must contain at least one entry. Limited to 64 origin domains. Each allowed origin can have up to 256 characters.
* **allowed_methods** (_list_ _(__str_ _)_) – A list of HTTP methods that are allowed to be executed by the origin. The list of must contain at least one entry. For Azure Storage, permitted methods are DELETE, GET, HEAD, MERGE, POST, OPTIONS or PUT.
Keyword Arguments:
* **allowed_headers** (_str_) – Defaults to an empty list. A list of headers allowed to be part of the cross-origin request. Limited to 64 defined headers and 2 prefixed headers. Each header can be up to 256 characters.
* **exposed_headers** (_str_) – Defaults to an empty list. A list of response headers to expose to CORS clients. Limited to 64 defined headers and two prefixed headers. Each header can be up to 256 characters.
* **max_age_in_seconds** (_int_) – The number of seconds that the client/browser should cache a preflight response.
* **allowed_origins** (_str_) – The origin domains that are permitted to make a request against the storage service via CORS. The origin domain is the domain from which the request originates. Note that the origin must be an exact case-sensitive match with the origin that the user age sends to the service. You can also use the wildcard character ‘*’ to allow all origin domains to make requests via CORS. Required.
* **allowed_methods** (_str_) – The methods (HTTP request verbs) that the origin domain may use for a CORS request. (comma separated). Required.
* **allowed_headers** – the request headers that the origin domain may specify on the CORS request. Required.
* **exposed_headers** – The response headers that may be sent in the response to the CORS request and exposed by the browser to the request issuer. Required.
* **max_age_in_seconds** – The maximum amount time that a browser should cache the preflight OPTIONS request. Required.
as_dict(_keep_readonly: bool = True, key_transformer: ~typing.Callable[[str,
~typing.Dict[str, ~typing.Any], ~typing.Any], ~typing.Any] = <function
attribute_transformer>, **kwargs: ~typing.Any_) → MutableMapping[str, Any]¶
Return a dict that can be serialized using json.dump.
Advanced usage might optionally use a callback as parameter:
Key is the attribute name used in Python. Attr_desc is a dict of metadata.
Currently contains ‘type’ with the msrest type and ‘key’ with the RestAPI
encoded key. Value is the current value in this object.
The string returned will be used to serialize the key. If the return type is a
list, this is considered hierarchical result dict.
See the three examples in this file:
* attribute_transformer
* full_restapi_key_transformer
* last_restapi_key_transformer
If you want XML serialization, you can pass the kwargs is_xml=True.
Parameters:
**key_transformer** (_function_) – A key transformer function.
Returns:
A dict JSON compatible object
Return type:
dict
_classmethod _deserialize(_data : Any_, _content_type : str | None = None_) → ModelType¶
Parse a str using the RestAPI syntax and return a model.
Parameters:
* **data** (_str_) – A str using RestAPI structure. JSON by default.
* **content_type** (_str_) – JSON by default, set application/xml if XML.
Returns:
An instance of this model
Raises:
DeserializationError if something went wrong
_classmethod _enable_additional_properties_sending() → None¶
_classmethod _from_dict(_data : Any_, _key_extractors : Callable[[str, Dict[str, Any], Any], Any] | None = None_, _content_type : str | None = None_) → ModelType¶
Parse a dict using given key extractor return a model.
By default consider key extractors (rest_key_case_insensitive_extractor,
attribute_key_case_insensitive_extractor and
last_rest_key_case_insensitive_extractor)
Parameters:
* **data** (_dict_) – A dict using RestAPI structure
* **content_type** (_str_) – JSON by default, set application/xml if XML.
Returns:
An instance of this model
Raises:
DeserializationError if something went wrong
_classmethod _is_xml_model() → bool¶
serialize(_keep_readonly : bool = False_, _** kwargs: Any_) →
MutableMapping[str, Any]¶
Return the JSON that would be sent to server from this model.
This is an alias to as_dict(full_restapi_key_transformer,
keep_readonly=False).
If you want XML serialization, you can pass the kwargs is_xml=True.
Parameters:
**keep_readonly** (_bool_) – If you want to serialize the readonly attributes
Returns:
A dict JSON compatible object
Return type:
dict
allowed_headers _: str_¶
The comma-delimited string representation of the list of headers allowed to be
part of the cross-origin request.
allowed_methods _: str_¶
The comma-delimited string representation of the list HTTP methods that are
allowed to be executed by the origin.
allowed_origins _: str_¶
The comma-delimited string representation of the list of origin domains that
will be allowed via CORS, or “*” to allow all domains.
exposed_headers _: str_¶
The comma-delimited string representation of the list of response headers to
expose to CORS clients.
max_age_in_seconds _: int_¶
The number of seconds that the client/browser should cache a pre-flight
response.
_class _azure.storage.blob.CustomerProvidedEncryptionKey(_key_value : str_,
_key_hash : str_)[source]¶
All data in Azure Storage is encrypted at-rest using an account-level
encryption key. In versions 2018-06-17 and newer, you can manage the key used
to encrypt blob contents and application metadata per-blob by providing an
AES-256 encryption key in requests to the storage service.
When you use a customer-provided key, Azure Storage does not manage or persist
your key. When writing data to a blob, the provided key is used to encrypt
your data before writing it to disk. A SHA-256 hash of the encryption key is
written alongside the blob contents, and is used to verify that all subsequent
operations against the blob use the same encryption key. This hash cannot be
used to retrieve the encryption key or decrypt the contents of the blob. When
reading a blob, the provided key is used to decrypt your data after reading it
from disk. In both cases, the provided encryption key is securely discarded as
soon as the encryption or decryption process completes.
Parameters:
* **key_value** (_str_) – Base64-encoded AES-256 encryption key value.
* **key_hash** (_str_) – Base64-encoded SHA256 of the encryption key.
algorithm _: str_¶
Specifies the algorithm to use when encrypting data using the given key. Must
be AES256.
key_hash _: str_¶
Base64-encoded SHA256 of the encryption key.
key_value _: str_¶
Base64-encoded AES-256 encryption key value.
_class _azure.storage.blob.DelimitedJsonDialect(_** kwargs: Any_)[source]¶
Defines the input or output JSON serialization for a blob data query.
Keyword Arguments:
**delimiter** (_str_) – The line separator character, default value is ‘\n’.
get(_key_ , _default =None_)¶
has_key(_k_)¶
items()¶
keys()¶
update(_* args_, _** kwargs_)¶
values()¶
_class _azure.storage.blob.DelimitedTextDialect(_** kwargs: Any_)[source]¶
Defines the input or output delimited (CSV) serialization for a blob query
request.
Keyword Arguments:
* **delimiter** (_str_) – Column separator, defaults to ‘,’.
* **quotechar** (_str_) – Field quote, defaults to ‘”’.
* **lineterminator** (_str_) – Record separator, defaults to ‘\n’.
* **escapechar** (_str_) – Escape char, defaults to empty.
* **has_header** (_bool_) – Whether the blob data includes headers in the first line. The default value is False, meaning that the data will be returned inclusive of the first line. If set to True, the data will be returned exclusive of the first line.
get(_key_ , _default =None_)¶
has_key(_k_)¶
items()¶
keys()¶
update(_* args_, _** kwargs_)¶
values()¶
_class _azure.storage.blob.ExponentialRetry(_initial_backoff : int = 15_,
_increment_base : int = 3_, _retry_total : int = 3_, _retry_to_secondary :
bool = False_, _random_jitter_range : int = 3_, _** kwargs: Any_)[source]¶
Exponential retry.
Constructs an Exponential retry object. The initial_backoff is used for the
first retry. Subsequent retries are retried after initial_backoff +
increment_power^retry_count seconds.
Parameters:
* **initial_backoff** (_int_) – The initial backoff interval, in seconds, for the first retry.
* **increment_base** (_int_) – The base, in seconds, to increment the initial_backoff by after the first retry.
* **retry_total** (_int_) – The maximum number of retry attempts.
* **retry_to_secondary** (_bool_) – Whether the request should be retried to secondary, if able. This should only be enabled of RA-GRS accounts are used and potentially stale data can be handled.
* **random_jitter_range** (_int_) – A number in seconds which indicates a range to jitter/randomize for the back-off interval. For example, a random_jitter_range of 3 results in the back-off interval x to vary between x+3 and x-3.
configure_retries(_request : PipelineRequest_) → Dict[str, Any]¶
get_backoff_time(_settings : Dict[str, Any]_) → float[source]¶
Calculates how long to sleep before retrying.
Parameters:
**settings** (_Dict_ _[__str_ _,__Any_ _]__]_) – The configurable values
pertaining to get backoff time.
Returns:
A float indicating how long to wait before retrying the request, or None to
indicate no retry should be performed.
Return type:
float
increment(_settings : Dict[str, Any]_, _request : PipelineRequest_, _response : PipelineResponse | None = None_, _error : AzureError | None = None_) → bool¶
Increment the retry counters.
Parameters:
* **settings** (_Dict_ _[__str_ _,__Any_ _]__]_) – The configurable values pertaining to the increment operation.
* **request** (_PipelineRequest_) – A pipeline request object.
* **response** (_Optional_ _[__PipelineResponse_ _]_) – A pipeline response object.
* **error** (_Optional_ _[__AzureError_ _]_) – An error encountered during the request, or None if the response was received successfully.
Returns:
Whether the retry attempts are exhausted.
Return type:
bool
send(_request_)¶
Abstract send method for a synchronous pipeline. Mutates the request.
Context content is dependent on the HttpTransport.
Parameters:
**request** (_PipelineRequest_) – The pipeline request object
Returns:
The pipeline response object.
Return type:
_PipelineResponse_
sleep(_settings_ , _transport_)¶
connect_retries _: int_¶
The max number of connect retries.
increment_base _: int_¶
The base, in seconds, to increment the initial_backoff by after the first
retry.
initial_backoff _: int_¶
The initial backoff interval, in seconds, for the first retry.
next _: HTTPPolicy[HTTPRequestType, HTTPResponseType]_¶
Pointer to the next policy or a transport (wrapped as a policy). Will be set
at pipeline creation.
random_jitter_range _: int_¶
A number in seconds which indicates a range to jitter/randomize for the back-
off interval.
retry_read _: int_¶
The max number of read retries.
retry_status _: int_¶
The max number of status retries.
retry_to_secondary _: bool_¶
Whether the secondary endpoint should be retried.
total_retries _: int_¶
The max number of retries.
_class _azure.storage.blob.FilteredBlob(_** kwargs: Any_)[source]¶
Blob info from a Filter Blobs API call.
get(_key_ , _default =None_)¶
has_key(_k_)¶
items()¶
keys()¶
update(_* args_, _** kwargs_)¶
values()¶
container_name _: str | None_¶
Container name.
name _: str_¶
Blob name
tags _: Dict[str, str] | None_¶
Key value pairs of blob tags.
_class _azure.storage.blob.ImmutabilityPolicy(_** kwargs: Any_)[source]¶
Optional parameters for setting the immutability policy of a blob, blob
snapshot or blob version.
Added in version 12.10.0: This was introduced in API version ‘2020-10-02’.
Keyword Arguments:
* **expiry_time** (_datetime_) – Specifies the date time when the blobs immutability policy is set to expire.
* **policy_mode** (_str_ _or_ _BlobImmutabilityPolicyMode_) – Specifies the immutability policy mode to set on the blob. Possible values to set include: “Locked”, “Unlocked”. “Mutable” can only be returned by service, don’t set to “Mutable”.
get(_key_ , _default =None_)¶
has_key(_k_)¶
items()¶
keys()¶
update(_* args_, _** kwargs_)¶
values()¶
expiry_time _: datetime | None_ _ = None_¶
Specifies the date time when the blobs immutability policy is set to expire.
policy_mode _: str | None_ _ = None_¶
Specifies the immutability policy mode to set on the blob.
_class _azure.storage.blob.LeaseProperties(_** kwargs: Any_)[source]¶
Blob Lease Properties.
get(_key_ , _default =None_)¶
has_key(_k_)¶
items()¶
keys()¶
update(_* args_, _** kwargs_)¶
values()¶
duration _: str | None_¶
When a blob is leased, specifies whether the lease is of infinite or fixed
duration.
state _: str_¶
available|leased|expired|breaking|broken
Type:
Lease state of the blob. Possible values
status _: str_¶
locked|unlocked
Type:
The lease status of the blob. Possible values
_class _azure.storage.blob.LinearRetry(_backoff : int = 15_, _retry_total :
int = 3_, _retry_to_secondary : bool = False_, _random_jitter_range : int =
3_, _** kwargs: Any_)[source]¶
Linear retry.
Constructs a Linear retry object.
Parameters:
* **backoff** (_int_) – The backoff interval, in seconds, between retries.
* **retry_total** (_int_) – The maximum number of retry attempts.
* **retry_to_secondary** (_bool_) – Whether the request should be retried to secondary, if able. This should only be enabled of RA-GRS accounts are used and potentially stale data can be handled.
* **random_jitter_range** (_int_) – A number in seconds which indicates a range to jitter/randomize for the back-off interval. For example, a random_jitter_range of 3 results in the back-off interval x to vary between x+3 and x-3.
configure_retries(_request : PipelineRequest_) → Dict[str, Any]¶
get_backoff_time(_settings : Dict[str, Any]_) → float[source]¶
Calculates how long to sleep before retrying.
Parameters:
**settings** (_Dict_ _[__str_ _,__Any_ _]__]_) – The configurable values
pertaining to the backoff time.
Returns:
A float indicating how long to wait before retrying the request, or None to
indicate no retry should be performed.
Return type:
float
increment(_settings : Dict[str, Any]_, _request : PipelineRequest_, _response : PipelineResponse | None = None_, _error : AzureError | None = None_) → bool¶
Increment the retry counters.
Parameters:
* **settings** (_Dict_ _[__str_ _,__Any_ _]__]_) – The configurable values pertaining to the increment operation.
* **request** (_PipelineRequest_) – A pipeline request object.
* **response** (_Optional_ _[__PipelineResponse_ _]_) – A pipeline response object.
* **error** (_Optional_ _[__AzureError_ _]_) – An error encountered during the request, or None if the response was received successfully.
Returns:
Whether the retry attempts are exhausted.
Return type:
bool
send(_request_)¶
Abstract send method for a synchronous pipeline. Mutates the request.
Context content is dependent on the HttpTransport.
Parameters:
**request** (_PipelineRequest_) – The pipeline request object
Returns:
The pipeline response object.
Return type:
_PipelineResponse_
sleep(_settings_ , _transport_)¶
connect_retries _: int_¶
The max number of connect retries.
initial_backoff _: int_¶
The backoff interval, in seconds, between retries.
next _: HTTPPolicy[HTTPRequestType, HTTPResponseType]_¶
Pointer to the next policy or a transport (wrapped as a policy). Will be set
at pipeline creation.
random_jitter_range _: int_¶
A number in seconds which indicates a range to jitter/randomize for the back-
off interval.
retry_read _: int_¶
The max number of read retries.
retry_status _: int_¶
The max number of status retries.
retry_to_secondary _: bool_¶
Whether the secondary endpoint should be retried.
total_retries _: int_¶
The max number of retries.
_class _azure.storage.blob.LocationMode[source]¶
Specifies the location the request should be sent to. This mode only applies
for RA-GRS accounts which allow secondary read access. All other account types
must use PRIMARY.
PRIMARY _ = 'primary'_¶
Requests should be sent to the primary location.
SECONDARY _ = 'secondary'_¶
Requests should be sent to the secondary location, if possible.
_class _azure.storage.blob.Metrics(_** kwargs: Any_)[source]¶
A summary of request statistics grouped by API in hour or minute aggregates
for blobs.
Keyword Arguments:
* **version** (_str_) – The version of Storage Analytics to configure. The default value is 1.0.
* **enabled** (_bool_) – Indicates whether metrics are enabled for the Blob service. The default value is False.
* **include_apis** (_bool_) – Indicates whether metrics should generate summary statistics for called API operations.
* **retention_policy** (_RetentionPolicy_) – Determines how long the associated data should persist. If not specified the retention policy will be disabled by default.
* **version** – The version of Storage Analytics to configure.
* **enabled** – Indicates whether metrics are enabled for the Blob service. Required.
* **include_apis** – Indicates whether metrics should generate summary statistics for called API operations.
* **retention_policy** – the retention policy which determines how long the associated data should persist.
as_dict(_keep_readonly: bool = True, key_transformer: ~typing.Callable[[str,
~typing.Dict[str, ~typing.Any], ~typing.Any], ~typing.Any] = <function
attribute_transformer>, **kwargs: ~typing.Any_) → MutableMapping[str, Any]¶
Return a dict that can be serialized using json.dump.
Advanced usage might optionally use a callback as parameter:
Key is the attribute name used in Python. Attr_desc is a dict of metadata.
Currently contains ‘type’ with the msrest type and ‘key’ with the RestAPI
encoded key. Value is the current value in this object.
The string returned will be used to serialize the key. If the return type is a
list, this is considered hierarchical result dict.
See the three examples in this file:
* attribute_transformer
* full_restapi_key_transformer
* last_restapi_key_transformer
If you want XML serialization, you can pass the kwargs is_xml=True.
Parameters:
**key_transformer** (_function_) – A key transformer function.
Returns:
A dict JSON compatible object
Return type:
dict
_classmethod _deserialize(_data : Any_, _content_type : str | None = None_) → ModelType¶
Parse a str using the RestAPI syntax and return a model.
Parameters:
* **data** (_str_) – A str using RestAPI structure. JSON by default.
* **content_type** (_str_) – JSON by default, set application/xml if XML.
Returns:
An instance of this model
Raises:
DeserializationError if something went wrong
_classmethod _enable_additional_properties_sending() → None¶
_classmethod _from_dict(_data : Any_, _key_extractors : Callable[[str, Dict[str, Any], Any], Any] | None = None_, _content_type : str | None = None_) → ModelType¶
Parse a dict using given key extractor return a model.
By default consider key extractors (rest_key_case_insensitive_extractor,
attribute_key_case_insensitive_extractor and
last_rest_key_case_insensitive_extractor)
Parameters:
* **data** (_dict_) – A dict using RestAPI structure
* **content_type** (_str_) – JSON by default, set application/xml if XML.
Returns:
An instance of this model
Raises:
DeserializationError if something went wrong
_classmethod _is_xml_model() → bool¶
serialize(_keep_readonly : bool = False_, _** kwargs: Any_) →
MutableMapping[str, Any]¶
Return the JSON that would be sent to server from this model.
This is an alias to as_dict(full_restapi_key_transformer,
keep_readonly=False).
If you want XML serialization, you can pass the kwargs is_xml=True.
Parameters:
**keep_readonly** (_bool_) – If you want to serialize the readonly attributes
Returns:
A dict JSON compatible object
Return type:
dict
enabled _: bool_ _ = False_¶
Indicates whether metrics are enabled for the Blob service.
include_apis _: bool | None_¶
Indicates whether metrics should generate summary statistics for called API
operations.
retention_policy _: RetentionPolicy_ _ =
<azure.storage.blob._models.RetentionPolicy object>_¶
Determines how long the associated data should persist.
version _: str_ _ = '1.0'_¶
The version of Storage Analytics to configure.
_class _azure.storage.blob.ObjectReplicationPolicy(_** kwargs: Any_)[source]¶
Policy id and rule ids applied to a blob.
get(_key_ , _default =None_)¶
has_key(_k_)¶
items()¶
keys()¶
update(_* args_, _** kwargs_)¶
values()¶
policy_id _: str_¶
Policy id for the blob. A replication policy gets created (policy id) when
creating a source/destination pair.
rules _: List[ObjectReplicationRule]_¶
Within each policy there may be multiple replication rules. e.g. rule 1=
src/container/.pdf to dst/container2/; rule2 = src/container1/.jpg to
dst/container3
_class _azure.storage.blob.ObjectReplicationRule(_** kwargs: Any_)[source]¶
Policy id and rule ids applied to a blob.
get(_key_ , _default =None_)¶
has_key(_k_)¶
items()¶
keys()¶
update(_* args_, _** kwargs_)¶
values()¶
rule_id _: str_¶
Rule id.
status _: str_¶
The status of the rule. It could be “Complete” or “Failed”
_class _azure.storage.blob.PageRange(_start : int | None = None_, _end : int | None = None_, _*_ , _cleared : bool = False_)[source]¶
Page Range for page blob.
Parameters:
* **start** (_int_) – Start of page range in bytes.
* **end** (_int_) – End of page range in bytes.
get(_key_ , _default =None_)¶
has_key(_k_)¶
items()¶
keys()¶
update(_* args_, _** kwargs_)¶
values()¶
cleared _: bool_¶
Whether the range has been cleared.
end _: int | None_ _ = None_¶
End of page range in bytes.
start _: int | None_ _ = None_¶
Start of page range in bytes.
_class _azure.storage.blob.PremiumPageBlobTier(_value_ , _names =None_, _*_ ,
_module =None_, _qualname =None_, _type =None_, _start =1_, _boundary
=None_)[source]¶
Specifies the page blob tier to set the blob to. This is only applicable to
page blobs on premium storage accounts. Please take a look at:
https://docs.microsoft.com/en-us/azure/storage/storage-premium-
storage#scalability-and-performance-targets for detailed information on the
corresponding IOPS and throughput per PageBlobTier.
capitalize()¶
Return a capitalized version of the string.
More specifically, make the first character have upper case and the rest lower
case.
casefold()¶
Return a version of the string suitable for caseless comparisons.
center(_width_ , _fillchar =' '_, _/_)¶
Return a centered string of length width.
Padding is done using the specified fill character (default is a space).
count(_sub_[, _start_[, _end_]]) → int¶
Return the number of non-overlapping occurrences of substring sub in string
S[start:end]. Optional arguments start and end are interpreted as in slice
notation.
encode(_encoding ='utf-8'_, _errors ='strict'_)¶
Encode the string using the codec registered for encoding.
encoding
The encoding in which to encode the string.
errors
The error handling scheme to use for encoding errors. The default is ‘strict’
meaning that encoding errors raise a UnicodeEncodeError. Other possible values
are ‘ignore’, ‘replace’ and ‘xmlcharrefreplace’ as well as any other name
registered with codecs.register_error that can handle UnicodeEncodeErrors.
endswith(_suffix_[, _start_[, _end_]]) → bool¶
Return True if S ends with the specified suffix, False otherwise. With
optional start, test S beginning at that position. With optional end, stop
comparing S at that position. suffix can also be a tuple of strings to try.
expandtabs(_tabsize =8_)¶
Return a copy where all tab characters are expanded using spaces.
If tabsize is not given, a tab size of 8 characters is assumed.
find(_sub_[, _start_[, _end_]]) → int¶
Return the lowest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Return -1 on failure.
format(_* args_, _** kwargs_) → str¶
Return a formatted version of S, using substitutions from args and kwargs. The
substitutions are identified by braces (‘{’ and ‘}’).
format_map(_mapping_) → str¶
Return a formatted version of S, using substitutions from mapping. The
substitutions are identified by braces (‘{’ and ‘}’).
index(_sub_[, _start_[, _end_]]) → int¶
Return the lowest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Raises ValueError when the substring is not found.
isalnum()¶
Return True if the string is an alpha-numeric string, False otherwise.
A string is alpha-numeric if all characters in the string are alpha-numeric
and there is at least one character in the string.
isalpha()¶
Return True if the string is an alphabetic string, False otherwise.
A string is alphabetic if all characters in the string are alphabetic and
there is at least one character in the string.
isascii()¶
Return True if all characters in the string are ASCII, False otherwise.
ASCII characters have code points in the range U+0000-U+007F. Empty string is
ASCII too.
isdecimal()¶
Return True if the string is a decimal string, False otherwise.
A string is a decimal string if all characters in the string are decimal and
there is at least one character in the string.
isdigit()¶
Return True if the string is a digit string, False otherwise.
A string is a digit string if all characters in the string are digits and
there is at least one character in the string.
isidentifier()¶
Return True if the string is a valid Python identifier, False otherwise.
Call keyword.iskeyword(s) to test whether string s is a reserved identifier,
such as “def” or “class”.
islower()¶
Return True if the string is a lowercase string, False otherwise.
A string is lowercase if all cased characters in the string are lowercase and
there is at least one cased character in the string.
isnumeric()¶
Return True if the string is a numeric string, False otherwise.
A string is numeric if all characters in the string are numeric and there is
at least one character in the string.
isprintable()¶
Return True if the string is printable, False otherwise.
A string is printable if all of its characters are considered printable in
repr() or if it is empty.
isspace()¶
Return True if the string is a whitespace string, False otherwise.
A string is whitespace if all characters in the string are whitespace and
there is at least one character in the string.
istitle()¶
Return True if the string is a title-cased string, False otherwise.
In a title-cased string, upper- and title-case characters may only follow
uncased characters and lowercase characters only cased ones.
isupper()¶
Return True if the string is an uppercase string, False otherwise.
A string is uppercase if all cased characters in the string are uppercase and
there is at least one cased character in the string.
join(_iterable_ , _/_)¶
Concatenate any number of strings.
The string whose method is called is inserted in between each given string.
The result is returned as a new string.
Example: ‘.’.join([‘ab’, ‘pq’, ‘rs’]) -> ‘ab.pq.rs’
ljust(_width_ , _fillchar =' '_, _/_)¶
Return a left-justified string of length width.
Padding is done using the specified fill character (default is a space).
lower()¶
Return a copy of the string converted to lowercase.
lstrip(_chars =None_, _/_)¶
Return a copy of the string with leading whitespace removed.
If chars is given and not None, remove characters in chars instead.
_static _maketrans()¶
Return a translation table usable for str.translate().
If there is only one argument, it must be a dictionary mapping Unicode
ordinals (integers) or characters to Unicode ordinals, strings or None.
Character keys will be then converted to ordinals. If there are two arguments,
they must be strings of equal length, and in the resulting dictionary, each
character in x will be mapped to the character at the same position in y. If
there is a third argument, it must be a string, whose characters will be
mapped to None in the result.
partition(_sep_ , _/_)¶
Partition the string into three parts using the given separator.
This will search for the separator in the string. If the separator is found,
returns a 3-tuple containing the part before the separator, the separator
itself, and the part after it.
If the separator is not found, returns a 3-tuple containing the original
string and two empty strings.
removeprefix(_prefix_ , _/_)¶
Return a str with the given prefix string removed if present.
If the string starts with the prefix string, return string[len(prefix):].
Otherwise, return a copy of the original string.
removesuffix(_suffix_ , _/_)¶
Return a str with the given suffix string removed if present.
If the string ends with the suffix string and that suffix is not empty, return
string[:-len(suffix)]. Otherwise, return a copy of the original string.
replace(_old_ , _new_ , _count =-1_, _/_)¶
Return a copy with all occurrences of substring old replaced by new.
> count
>
>
> Maximum number of occurrences to replace. -1 (the default value) means
> replace all occurrences.
If the optional argument count is given, only the first count occurrences are
replaced.
rfind(_sub_[, _start_[, _end_]]) → int¶
Return the highest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Return -1 on failure.
rindex(_sub_[, _start_[, _end_]]) → int¶
Return the highest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Raises ValueError when the substring is not found.
rjust(_width_ , _fillchar =' '_, _/_)¶
Return a right-justified string of length width.
Padding is done using the specified fill character (default is a space).
rpartition(_sep_ , _/_)¶
Partition the string into three parts using the given separator.
This will search for the separator in the string, starting at the end. If the
separator is found, returns a 3-tuple containing the part before the
separator, the separator itself, and the part after it.
If the separator is not found, returns a 3-tuple containing two empty strings
and the original string.
rsplit(_sep =None_, _maxsplit =-1_)¶
Return a list of the substrings in the string, using sep as the separator
string.
> sep
>
>
> The separator used to split the string.
>
> When set to None (the default value), will split on any whitespace character
> (including n r t f and spaces) and will discard empty strings from the
> result.
>
> maxsplit
>
>
> Maximum number of splits. -1 (the default value) means no limit.
Splitting starts at the end of the string and works to the front.
rstrip(_chars =None_, _/_)¶
Return a copy of the string with trailing whitespace removed.
If chars is given and not None, remove characters in chars instead.
split(_sep =None_, _maxsplit =-1_)¶
Return a list of the substrings in the string, using sep as the separator
string.
> sep
>
>
> The separator used to split the string.
>
> When set to None (the default value), will split on any whitespace character
> (including n r t f and spaces) and will discard empty strings from the
> result.
>
> maxsplit
>
>
> Maximum number of splits. -1 (the default value) means no limit.
Splitting starts at the front of the string and works to the end.
Note, str.split() is mainly useful for data that has been intentionally
delimited. With natural text that includes punctuation, consider using the
regular expression module.
splitlines(_keepends =False_)¶
Return a list of the lines in the string, breaking at line boundaries.
Line breaks are not included in the resulting list unless keepends is given
and true.
startswith(_prefix_[, _start_[, _end_]]) → bool¶
Return True if S starts with the specified prefix, False otherwise. With
optional start, test S beginning at that position. With optional end, stop
comparing S at that position. prefix can also be a tuple of strings to try.
strip(_chars =None_, _/_)¶
Return a copy of the string with leading and trailing whitespace removed.
If chars is given and not None, remove characters in chars instead.
swapcase()¶
Convert uppercase characters to lowercase and lowercase characters to
uppercase.
title()¶
Return a version of the string where each word is titlecased.
More specifically, words start with uppercased characters and all remaining
cased characters have lower case.
translate(_table_ , _/_)¶
Replace each character in the string using the given translation table.
> table
>
>
> Translation table, which must be a mapping of Unicode ordinals to Unicode
> ordinals, strings, or None.
The table must implement lookup/indexing via __getitem__, for instance a
dictionary or list. If this operation raises LookupError, the character is
left untouched. Characters mapped to None are deleted.
upper()¶
Return a copy of the string converted to uppercase.
zfill(_width_ , _/_)¶
Pad a numeric string with zeros on the left, to fill a field of the given
width.
The string is never truncated.
P10 _ = 'P10'_¶
P10 Tier
P15 _ = 'P15'_¶
P15 Tier
P20 _ = 'P20'_¶
P20 Tier
P30 _ = 'P30'_¶
P30 Tier
P4 _ = 'P4'_¶
P4 Tier
P40 _ = 'P40'_¶
P40 Tier
P50 _ = 'P50'_¶
P50 Tier
P6 _ = 'P6'_¶
P6 Tier
P60 _ = 'P60'_¶
P60 Tier
_class _azure.storage.blob.PublicAccess(_value_ , _names =None_, _*_ , _module
=None_, _qualname =None_, _type =None_, _start =1_, _boundary =None_)[source]¶
Specifies whether data in the container may be accessed publicly and the level
of access.
capitalize()¶
Return a capitalized version of the string.
More specifically, make the first character have upper case and the rest lower
case.
casefold()¶
Return a version of the string suitable for caseless comparisons.
center(_width_ , _fillchar =' '_, _/_)¶
Return a centered string of length width.
Padding is done using the specified fill character (default is a space).
count(_sub_[, _start_[, _end_]]) → int¶
Return the number of non-overlapping occurrences of substring sub in string
S[start:end]. Optional arguments start and end are interpreted as in slice
notation.
encode(_encoding ='utf-8'_, _errors ='strict'_)¶
Encode the string using the codec registered for encoding.
encoding
The encoding in which to encode the string.
errors
The error handling scheme to use for encoding errors. The default is ‘strict’
meaning that encoding errors raise a UnicodeEncodeError. Other possible values
are ‘ignore’, ‘replace’ and ‘xmlcharrefreplace’ as well as any other name
registered with codecs.register_error that can handle UnicodeEncodeErrors.
endswith(_suffix_[, _start_[, _end_]]) → bool¶
Return True if S ends with the specified suffix, False otherwise. With
optional start, test S beginning at that position. With optional end, stop
comparing S at that position. suffix can also be a tuple of strings to try.
expandtabs(_tabsize =8_)¶
Return a copy where all tab characters are expanded using spaces.
If tabsize is not given, a tab size of 8 characters is assumed.
find(_sub_[, _start_[, _end_]]) → int¶
Return the lowest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Return -1 on failure.
format(_* args_, _** kwargs_) → str¶
Return a formatted version of S, using substitutions from args and kwargs. The
substitutions are identified by braces (‘{’ and ‘}’).
format_map(_mapping_) → str¶
Return a formatted version of S, using substitutions from mapping. The
substitutions are identified by braces (‘{’ and ‘}’).
index(_sub_[, _start_[, _end_]]) → int¶
Return the lowest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Raises ValueError when the substring is not found.
isalnum()¶
Return True if the string is an alpha-numeric string, False otherwise.
A string is alpha-numeric if all characters in the string are alpha-numeric
and there is at least one character in the string.
isalpha()¶
Return True if the string is an alphabetic string, False otherwise.
A string is alphabetic if all characters in the string are alphabetic and
there is at least one character in the string.
isascii()¶
Return True if all characters in the string are ASCII, False otherwise.
ASCII characters have code points in the range U+0000-U+007F. Empty string is
ASCII too.
isdecimal()¶
Return True if the string is a decimal string, False otherwise.
A string is a decimal string if all characters in the string are decimal and
there is at least one character in the string.
isdigit()¶
Return True if the string is a digit string, False otherwise.
A string is a digit string if all characters in the string are digits and
there is at least one character in the string.
isidentifier()¶
Return True if the string is a valid Python identifier, False otherwise.
Call keyword.iskeyword(s) to test whether string s is a reserved identifier,
such as “def” or “class”.
islower()¶
Return True if the string is a lowercase string, False otherwise.
A string is lowercase if all cased characters in the string are lowercase and
there is at least one cased character in the string.
isnumeric()¶
Return True if the string is a numeric string, False otherwise.
A string is numeric if all characters in the string are numeric and there is
at least one character in the string.
isprintable()¶
Return True if the string is printable, False otherwise.
A string is printable if all of its characters are considered printable in
repr() or if it is empty.
isspace()¶
Return True if the string is a whitespace string, False otherwise.
A string is whitespace if all characters in the string are whitespace and
there is at least one character in the string.
istitle()¶
Return True if the string is a title-cased string, False otherwise.
In a title-cased string, upper- and title-case characters may only follow
uncased characters and lowercase characters only cased ones.
isupper()¶
Return True if the string is an uppercase string, False otherwise.
A string is uppercase if all cased characters in the string are uppercase and
there is at least one cased character in the string.
join(_iterable_ , _/_)¶
Concatenate any number of strings.
The string whose method is called is inserted in between each given string.
The result is returned as a new string.
Example: ‘.’.join([‘ab’, ‘pq’, ‘rs’]) -> ‘ab.pq.rs’
ljust(_width_ , _fillchar =' '_, _/_)¶
Return a left-justified string of length width.
Padding is done using the specified fill character (default is a space).
lower()¶
Return a copy of the string converted to lowercase.
lstrip(_chars =None_, _/_)¶
Return a copy of the string with leading whitespace removed.
If chars is given and not None, remove characters in chars instead.
_static _maketrans()¶
Return a translation table usable for str.translate().
If there is only one argument, it must be a dictionary mapping Unicode
ordinals (integers) or characters to Unicode ordinals, strings or None.
Character keys will be then converted to ordinals. If there are two arguments,
they must be strings of equal length, and in the resulting dictionary, each
character in x will be mapped to the character at the same position in y. If
there is a third argument, it must be a string, whose characters will be
mapped to None in the result.
partition(_sep_ , _/_)¶
Partition the string into three parts using the given separator.
This will search for the separator in the string. If the separator is found,
returns a 3-tuple containing the part before the separator, the separator
itself, and the part after it.
If the separator is not found, returns a 3-tuple containing the original
string and two empty strings.
removeprefix(_prefix_ , _/_)¶
Return a str with the given prefix string removed if present.
If the string starts with the prefix string, return string[len(prefix):].
Otherwise, return a copy of the original string.
removesuffix(_suffix_ , _/_)¶
Return a str with the given suffix string removed if present.
If the string ends with the suffix string and that suffix is not empty, return
string[:-len(suffix)]. Otherwise, return a copy of the original string.
replace(_old_ , _new_ , _count =-1_, _/_)¶
Return a copy with all occurrences of substring old replaced by new.
> count
>
>
> Maximum number of occurrences to replace. -1 (the default value) means
> replace all occurrences.
If the optional argument count is given, only the first count occurrences are
replaced.
rfind(_sub_[, _start_[, _end_]]) → int¶
Return the highest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Return -1 on failure.
rindex(_sub_[, _start_[, _end_]]) → int¶
Return the highest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Raises ValueError when the substring is not found.
rjust(_width_ , _fillchar =' '_, _/_)¶
Return a right-justified string of length width.
Padding is done using the specified fill character (default is a space).
rpartition(_sep_ , _/_)¶
Partition the string into three parts using the given separator.
This will search for the separator in the string, starting at the end. If the
separator is found, returns a 3-tuple containing the part before the
separator, the separator itself, and the part after it.
If the separator is not found, returns a 3-tuple containing two empty strings
and the original string.
rsplit(_sep =None_, _maxsplit =-1_)¶
Return a list of the substrings in the string, using sep as the separator
string.
> sep
>
>
> The separator used to split the string.
>
> When set to None (the default value), will split on any whitespace character
> (including n r t f and spaces) and will discard empty strings from the
> result.
>
> maxsplit
>
>
> Maximum number of splits. -1 (the default value) means no limit.
Splitting starts at the end of the string and works to the front.
rstrip(_chars =None_, _/_)¶
Return a copy of the string with trailing whitespace removed.
If chars is given and not None, remove characters in chars instead.
split(_sep =None_, _maxsplit =-1_)¶
Return a list of the substrings in the string, using sep as the separator
string.
> sep
>
>
> The separator used to split the string.
>
> When set to None (the default value), will split on any whitespace character
> (including n r t f and spaces) and will discard empty strings from the
> result.
>
> maxsplit
>
>
> Maximum number of splits. -1 (the default value) means no limit.
Splitting starts at the front of the string and works to the end.
Note, str.split() is mainly useful for data that has been intentionally
delimited. With natural text that includes punctuation, consider using the
regular expression module.
splitlines(_keepends =False_)¶
Return a list of the lines in the string, breaking at line boundaries.
Line breaks are not included in the resulting list unless keepends is given
and true.
startswith(_prefix_[, _start_[, _end_]]) → bool¶
Return True if S starts with the specified prefix, False otherwise. With
optional start, test S beginning at that position. With optional end, stop
comparing S at that position. prefix can also be a tuple of strings to try.
strip(_chars =None_, _/_)¶
Return a copy of the string with leading and trailing whitespace removed.
If chars is given and not None, remove characters in chars instead.
swapcase()¶
Convert uppercase characters to lowercase and lowercase characters to
uppercase.
title()¶
Return a version of the string where each word is titlecased.
More specifically, words start with uppercased characters and all remaining
cased characters have lower case.
translate(_table_ , _/_)¶
Replace each character in the string using the given translation table.
> table
>
>
> Translation table, which must be a mapping of Unicode ordinals to Unicode
> ordinals, strings, or None.
The table must implement lookup/indexing via __getitem__, for instance a
dictionary or list. If this operation raises LookupError, the character is
left untouched. Characters mapped to None are deleted.
upper()¶
Return a copy of the string converted to uppercase.
zfill(_width_ , _/_)¶
Pad a numeric string with zeros on the left, to fill a field of the given
width.
The string is never truncated.
BLOB _ = 'blob'_¶
Specifies public read access for blobs. Blob data within this container can be
read via anonymous request, but container data is not available. Clients
cannot enumerate blobs within the container via anonymous request.
CONTAINER _ = 'container'_¶
Specifies full public read access for container and blob data. Clients can
enumerate blobs within the container via anonymous request, but cannot
enumerate containers within the storage account.
OFF _ = 'off'_¶
Specifies that there is no public read access for both the container and blobs
within the container. Clients cannot enumerate the containers within the
storage account as well as the blobs within the container.
_class _azure.storage.blob.QuickQueryDialect(_value_ , _names =None_, _*_ ,
_module =None_, _qualname =None_, _type =None_, _start =1_, _boundary
=None_)[source]¶
Specifies the quick query input/output dialect.
capitalize()¶
Return a capitalized version of the string.
More specifically, make the first character have upper case and the rest lower
case.
casefold()¶
Return a version of the string suitable for caseless comparisons.
center(_width_ , _fillchar =' '_, _/_)¶
Return a centered string of length width.
Padding is done using the specified fill character (default is a space).
count(_sub_[, _start_[, _end_]]) → int¶
Return the number of non-overlapping occurrences of substring sub in string
S[start:end]. Optional arguments start and end are interpreted as in slice
notation.
encode(_encoding ='utf-8'_, _errors ='strict'_)¶
Encode the string using the codec registered for encoding.
encoding
The encoding in which to encode the string.
errors
The error handling scheme to use for encoding errors. The default is ‘strict’
meaning that encoding errors raise a UnicodeEncodeError. Other possible values
are ‘ignore’, ‘replace’ and ‘xmlcharrefreplace’ as well as any other name
registered with codecs.register_error that can handle UnicodeEncodeErrors.
endswith(_suffix_[, _start_[, _end_]]) → bool¶
Return True if S ends with the specified suffix, False otherwise. With
optional start, test S beginning at that position. With optional end, stop
comparing S at that position. suffix can also be a tuple of strings to try.
expandtabs(_tabsize =8_)¶
Return a copy where all tab characters are expanded using spaces.
If tabsize is not given, a tab size of 8 characters is assumed.
find(_sub_[, _start_[, _end_]]) → int¶
Return the lowest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Return -1 on failure.
format(_* args_, _** kwargs_) → str¶
Return a formatted version of S, using substitutions from args and kwargs. The
substitutions are identified by braces (‘{’ and ‘}’).
format_map(_mapping_) → str¶
Return a formatted version of S, using substitutions from mapping. The
substitutions are identified by braces (‘{’ and ‘}’).
index(_sub_[, _start_[, _end_]]) → int¶
Return the lowest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Raises ValueError when the substring is not found.
isalnum()¶
Return True if the string is an alpha-numeric string, False otherwise.
A string is alpha-numeric if all characters in the string are alpha-numeric
and there is at least one character in the string.
isalpha()¶
Return True if the string is an alphabetic string, False otherwise.
A string is alphabetic if all characters in the string are alphabetic and
there is at least one character in the string.
isascii()¶
Return True if all characters in the string are ASCII, False otherwise.
ASCII characters have code points in the range U+0000-U+007F. Empty string is
ASCII too.
isdecimal()¶
Return True if the string is a decimal string, False otherwise.
A string is a decimal string if all characters in the string are decimal and
there is at least one character in the string.
isdigit()¶
Return True if the string is a digit string, False otherwise.
A string is a digit string if all characters in the string are digits and
there is at least one character in the string.
isidentifier()¶
Return True if the string is a valid Python identifier, False otherwise.
Call keyword.iskeyword(s) to test whether string s is a reserved identifier,
such as “def” or “class”.
islower()¶
Return True if the string is a lowercase string, False otherwise.
A string is lowercase if all cased characters in the string are lowercase and
there is at least one cased character in the string.
isnumeric()¶
Return True if the string is a numeric string, False otherwise.
A string is numeric if all characters in the string are numeric and there is
at least one character in the string.
isprintable()¶
Return True if the string is printable, False otherwise.
A string is printable if all of its characters are considered printable in
repr() or if it is empty.
isspace()¶
Return True if the string is a whitespace string, False otherwise.
A string is whitespace if all characters in the string are whitespace and
there is at least one character in the string.
istitle()¶
Return True if the string is a title-cased string, False otherwise.
In a title-cased string, upper- and title-case characters may only follow
uncased characters and lowercase characters only cased ones.
isupper()¶
Return True if the string is an uppercase string, False otherwise.
A string is uppercase if all cased characters in the string are uppercase and
there is at least one cased character in the string.
join(_iterable_ , _/_)¶
Concatenate any number of strings.
The string whose method is called is inserted in between each given string.
The result is returned as a new string.
Example: ‘.’.join([‘ab’, ‘pq’, ‘rs’]) -> ‘ab.pq.rs’
ljust(_width_ , _fillchar =' '_, _/_)¶
Return a left-justified string of length width.
Padding is done using the specified fill character (default is a space).
lower()¶
Return a copy of the string converted to lowercase.
lstrip(_chars =None_, _/_)¶
Return a copy of the string with leading whitespace removed.
If chars is given and not None, remove characters in chars instead.
_static _maketrans()¶
Return a translation table usable for str.translate().
If there is only one argument, it must be a dictionary mapping Unicode
ordinals (integers) or characters to Unicode ordinals, strings or None.
Character keys will be then converted to ordinals. If there are two arguments,
they must be strings of equal length, and in the resulting dictionary, each
character in x will be mapped to the character at the same position in y. If
there is a third argument, it must be a string, whose characters will be
mapped to None in the result.
partition(_sep_ , _/_)¶
Partition the string into three parts using the given separator.
This will search for the separator in the string. If the separator is found,
returns a 3-tuple containing the part before the separator, the separator
itself, and the part after it.
If the separator is not found, returns a 3-tuple containing the original
string and two empty strings.
removeprefix(_prefix_ , _/_)¶
Return a str with the given prefix string removed if present.
If the string starts with the prefix string, return string[len(prefix):].
Otherwise, return a copy of the original string.
removesuffix(_suffix_ , _/_)¶
Return a str with the given suffix string removed if present.
If the string ends with the suffix string and that suffix is not empty, return
string[:-len(suffix)]. Otherwise, return a copy of the original string.
replace(_old_ , _new_ , _count =-1_, _/_)¶
Return a copy with all occurrences of substring old replaced by new.
> count
>
>
> Maximum number of occurrences to replace. -1 (the default value) means
> replace all occurrences.
If the optional argument count is given, only the first count occurrences are
replaced.
rfind(_sub_[, _start_[, _end_]]) → int¶
Return the highest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Return -1 on failure.
rindex(_sub_[, _start_[, _end_]]) → int¶
Return the highest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Raises ValueError when the substring is not found.
rjust(_width_ , _fillchar =' '_, _/_)¶
Return a right-justified string of length width.
Padding is done using the specified fill character (default is a space).
rpartition(_sep_ , _/_)¶
Partition the string into three parts using the given separator.
This will search for the separator in the string, starting at the end. If the
separator is found, returns a 3-tuple containing the part before the
separator, the separator itself, and the part after it.
If the separator is not found, returns a 3-tuple containing two empty strings
and the original string.
rsplit(_sep =None_, _maxsplit =-1_)¶
Return a list of the substrings in the string, using sep as the separator
string.
> sep
>
>
> The separator used to split the string.
>
> When set to None (the default value), will split on any whitespace character
> (including n r t f and spaces) and will discard empty strings from the
> result.
>
> maxsplit
>
>
> Maximum number of splits. -1 (the default value) means no limit.
Splitting starts at the end of the string and works to the front.
rstrip(_chars =None_, _/_)¶
Return a copy of the string with trailing whitespace removed.
If chars is given and not None, remove characters in chars instead.
split(_sep =None_, _maxsplit =-1_)¶
Return a list of the substrings in the string, using sep as the separator
string.
> sep
>
>
> The separator used to split the string.
>
> When set to None (the default value), will split on any whitespace character
> (including n r t f and spaces) and will discard empty strings from the
> result.
>
> maxsplit
>
>
> Maximum number of splits. -1 (the default value) means no limit.
Splitting starts at the front of the string and works to the end.
Note, str.split() is mainly useful for data that has been intentionally
delimited. With natural text that includes punctuation, consider using the
regular expression module.
splitlines(_keepends =False_)¶
Return a list of the lines in the string, breaking at line boundaries.
Line breaks are not included in the resulting list unless keepends is given
and true.
startswith(_prefix_[, _start_[, _end_]]) → bool¶
Return True if S starts with the specified prefix, False otherwise. With
optional start, test S beginning at that position. With optional end, stop
comparing S at that position. prefix can also be a tuple of strings to try.
strip(_chars =None_, _/_)¶
Return a copy of the string with leading and trailing whitespace removed.
If chars is given and not None, remove characters in chars instead.
swapcase()¶
Convert uppercase characters to lowercase and lowercase characters to
uppercase.
title()¶
Return a version of the string where each word is titlecased.
More specifically, words start with uppercased characters and all remaining
cased characters have lower case.
translate(_table_ , _/_)¶
Replace each character in the string using the given translation table.
> table
>
>
> Translation table, which must be a mapping of Unicode ordinals to Unicode
> ordinals, strings, or None.
The table must implement lookup/indexing via __getitem__, for instance a
dictionary or list. If this operation raises LookupError, the character is
left untouched. Characters mapped to None are deleted.
upper()¶
Return a copy of the string converted to uppercase.
zfill(_width_ , _/_)¶
Pad a numeric string with zeros on the left, to fill a field of the given
width.
The string is never truncated.
DELIMITEDJSON _ = 'DelimitedJsonDialect'_¶
DELIMITEDTEXT _ = 'DelimitedTextDialect'_¶
PARQUET _ = 'ParquetDialect'_¶
_class _azure.storage.blob.RehydratePriority(_value_ , _names =None_, _*_ ,
_module =None_, _qualname =None_, _type =None_, _start =1_, _boundary
=None_)[source]¶
If an object is in rehydrate pending state then this header is returned with
priority of rehydrate. Valid values are High and Standard.
capitalize()¶
Return a capitalized version of the string.
More specifically, make the first character have upper case and the rest lower
case.
casefold()¶
Return a version of the string suitable for caseless comparisons.
center(_width_ , _fillchar =' '_, _/_)¶
Return a centered string of length width.
Padding is done using the specified fill character (default is a space).
count(_sub_[, _start_[, _end_]]) → int¶
Return the number of non-overlapping occurrences of substring sub in string
S[start:end]. Optional arguments start and end are interpreted as in slice
notation.
encode(_encoding ='utf-8'_, _errors ='strict'_)¶
Encode the string using the codec registered for encoding.
encoding
The encoding in which to encode the string.
errors
The error handling scheme to use for encoding errors. The default is ‘strict’
meaning that encoding errors raise a UnicodeEncodeError. Other possible values
are ‘ignore’, ‘replace’ and ‘xmlcharrefreplace’ as well as any other name
registered with codecs.register_error that can handle UnicodeEncodeErrors.
endswith(_suffix_[, _start_[, _end_]]) → bool¶
Return True if S ends with the specified suffix, False otherwise. With
optional start, test S beginning at that position. With optional end, stop
comparing S at that position. suffix can also be a tuple of strings to try.
expandtabs(_tabsize =8_)¶
Return a copy where all tab characters are expanded using spaces.
If tabsize is not given, a tab size of 8 characters is assumed.
find(_sub_[, _start_[, _end_]]) → int¶
Return the lowest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Return -1 on failure.
format(_* args_, _** kwargs_) → str¶
Return a formatted version of S, using substitutions from args and kwargs. The
substitutions are identified by braces (‘{’ and ‘}’).
format_map(_mapping_) → str¶
Return a formatted version of S, using substitutions from mapping. The
substitutions are identified by braces (‘{’ and ‘}’).
index(_sub_[, _start_[, _end_]]) → int¶
Return the lowest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Raises ValueError when the substring is not found.
isalnum()¶
Return True if the string is an alpha-numeric string, False otherwise.
A string is alpha-numeric if all characters in the string are alpha-numeric
and there is at least one character in the string.
isalpha()¶
Return True if the string is an alphabetic string, False otherwise.
A string is alphabetic if all characters in the string are alphabetic and
there is at least one character in the string.
isascii()¶
Return True if all characters in the string are ASCII, False otherwise.
ASCII characters have code points in the range U+0000-U+007F. Empty string is
ASCII too.
isdecimal()¶
Return True if the string is a decimal string, False otherwise.
A string is a decimal string if all characters in the string are decimal and
there is at least one character in the string.
isdigit()¶
Return True if the string is a digit string, False otherwise.
A string is a digit string if all characters in the string are digits and
there is at least one character in the string.
isidentifier()¶
Return True if the string is a valid Python identifier, False otherwise.
Call keyword.iskeyword(s) to test whether string s is a reserved identifier,
such as “def” or “class”.
islower()¶
Return True if the string is a lowercase string, False otherwise.
A string is lowercase if all cased characters in the string are lowercase and
there is at least one cased character in the string.
isnumeric()¶
Return True if the string is a numeric string, False otherwise.
A string is numeric if all characters in the string are numeric and there is
at least one character in the string.
isprintable()¶
Return True if the string is printable, False otherwise.
A string is printable if all of its characters are considered printable in
repr() or if it is empty.
isspace()¶
Return True if the string is a whitespace string, False otherwise.
A string is whitespace if all characters in the string are whitespace and
there is at least one character in the string.
istitle()¶
Return True if the string is a title-cased string, False otherwise.
In a title-cased string, upper- and title-case characters may only follow
uncased characters and lowercase characters only cased ones.
isupper()¶
Return True if the string is an uppercase string, False otherwise.
A string is uppercase if all cased characters in the string are uppercase and
there is at least one cased character in the string.
join(_iterable_ , _/_)¶
Concatenate any number of strings.
The string whose method is called is inserted in between each given string.
The result is returned as a new string.
Example: ‘.’.join([‘ab’, ‘pq’, ‘rs’]) -> ‘ab.pq.rs’
ljust(_width_ , _fillchar =' '_, _/_)¶
Return a left-justified string of length width.
Padding is done using the specified fill character (default is a space).
lower()¶
Return a copy of the string converted to lowercase.
lstrip(_chars =None_, _/_)¶
Return a copy of the string with leading whitespace removed.
If chars is given and not None, remove characters in chars instead.
_static _maketrans()¶
Return a translation table usable for str.translate().
If there is only one argument, it must be a dictionary mapping Unicode
ordinals (integers) or characters to Unicode ordinals, strings or None.
Character keys will be then converted to ordinals. If there are two arguments,
they must be strings of equal length, and in the resulting dictionary, each
character in x will be mapped to the character at the same position in y. If
there is a third argument, it must be a string, whose characters will be
mapped to None in the result.
partition(_sep_ , _/_)¶
Partition the string into three parts using the given separator.
This will search for the separator in the string. If the separator is found,
returns a 3-tuple containing the part before the separator, the separator
itself, and the part after it.
If the separator is not found, returns a 3-tuple containing the original
string and two empty strings.
removeprefix(_prefix_ , _/_)¶
Return a str with the given prefix string removed if present.
If the string starts with the prefix string, return string[len(prefix):].
Otherwise, return a copy of the original string.
removesuffix(_suffix_ , _/_)¶
Return a str with the given suffix string removed if present.
If the string ends with the suffix string and that suffix is not empty, return
string[:-len(suffix)]. Otherwise, return a copy of the original string.
replace(_old_ , _new_ , _count =-1_, _/_)¶
Return a copy with all occurrences of substring old replaced by new.
> count
>
>
> Maximum number of occurrences to replace. -1 (the default value) means
> replace all occurrences.
If the optional argument count is given, only the first count occurrences are
replaced.
rfind(_sub_[, _start_[, _end_]]) → int¶
Return the highest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Return -1 on failure.
rindex(_sub_[, _start_[, _end_]]) → int¶
Return the highest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Raises ValueError when the substring is not found.
rjust(_width_ , _fillchar =' '_, _/_)¶
Return a right-justified string of length width.
Padding is done using the specified fill character (default is a space).
rpartition(_sep_ , _/_)¶
Partition the string into three parts using the given separator.
This will search for the separator in the string, starting at the end. If the
separator is found, returns a 3-tuple containing the part before the
separator, the separator itself, and the part after it.
If the separator is not found, returns a 3-tuple containing two empty strings
and the original string.
rsplit(_sep =None_, _maxsplit =-1_)¶
Return a list of the substrings in the string, using sep as the separator
string.
> sep
>
>
> The separator used to split the string.
>
> When set to None (the default value), will split on any whitespace character
> (including n r t f and spaces) and will discard empty strings from the
> result.
>
> maxsplit
>
>
> Maximum number of splits. -1 (the default value) means no limit.
Splitting starts at the end of the string and works to the front.
rstrip(_chars =None_, _/_)¶
Return a copy of the string with trailing whitespace removed.
If chars is given and not None, remove characters in chars instead.
split(_sep =None_, _maxsplit =-1_)¶
Return a list of the substrings in the string, using sep as the separator
string.
> sep
>
>
> The separator used to split the string.
>
> When set to None (the default value), will split on any whitespace character
> (including n r t f and spaces) and will discard empty strings from the
> result.
>
> maxsplit
>
>
> Maximum number of splits. -1 (the default value) means no limit.
Splitting starts at the front of the string and works to the end.
Note, str.split() is mainly useful for data that has been intentionally
delimited. With natural text that includes punctuation, consider using the
regular expression module.
splitlines(_keepends =False_)¶
Return a list of the lines in the string, breaking at line boundaries.
Line breaks are not included in the resulting list unless keepends is given
and true.
startswith(_prefix_[, _start_[, _end_]]) → bool¶
Return True if S starts with the specified prefix, False otherwise. With
optional start, test S beginning at that position. With optional end, stop
comparing S at that position. prefix can also be a tuple of strings to try.
strip(_chars =None_, _/_)¶
Return a copy of the string with leading and trailing whitespace removed.
If chars is given and not None, remove characters in chars instead.
swapcase()¶
Convert uppercase characters to lowercase and lowercase characters to
uppercase.
title()¶
Return a version of the string where each word is titlecased.
More specifically, words start with uppercased characters and all remaining
cased characters have lower case.
translate(_table_ , _/_)¶
Replace each character in the string using the given translation table.
> table
>
>
> Translation table, which must be a mapping of Unicode ordinals to Unicode
> ordinals, strings, or None.
The table must implement lookup/indexing via __getitem__, for instance a
dictionary or list. If this operation raises LookupError, the character is
left untouched. Characters mapped to None are deleted.
upper()¶
Return a copy of the string converted to uppercase.
zfill(_width_ , _/_)¶
Pad a numeric string with zeros on the left, to fill a field of the given
width.
The string is never truncated.
HIGH _ = 'High'_¶
STANDARD _ = 'Standard'_¶
_class _azure.storage.blob.ResourceTypes(_service : bool = False_, _container
: bool = False_, _object : bool = False_)[source]¶
Specifies the resource types that are accessible with the account SAS.
Parameters:
* **service** (_bool_) – Access to service-level APIs (e.g., Get/Set Service Properties, Get Service Stats, List Containers/Queues/Shares)
* **container** (_bool_) – Access to container-level APIs (e.g., Create/Delete Container, Create/Delete Queue, Create/Delete Share, List Blobs/Files and Directories)
* **object** (_bool_) – Access to object-level APIs for blobs, queue messages, and files(e.g. Put Blob, Query Entity, Get Messages, Create File, etc.)
_classmethod _from_string(_string_)[source]¶
Create a ResourceTypes from a string.
To specify service, container, or object you need only to include the first
letter of the word in the string. E.g. service and container, you would
provide a string “sc”.
Parameters:
**string** (_str_) – Specify service, container, or object in in the string
with the first letter of the word.
Returns:
A ResourceTypes object
Return type:
_ResourceTypes_
container _: bool_ _ = False_¶
object _: bool_ _ = False_¶
service _: bool_ _ = False_¶
_class _azure.storage.blob.RetentionPolicy(_enabled : bool = False_, _days : int | None = None_)[source]¶
The retention policy which determines how long the associated data should
persist.
Parameters:
* **enabled** (_bool_) – Indicates whether a retention policy is enabled for the storage service. The default value is False.
* **days** (_Optional_ _[__int_ _]_) – Indicates the number of days that metrics or logging or soft-deleted data should be retained. All data older than this value will be deleted. If enabled=True, the number of days must be specified.
Keyword Arguments:
* **enabled** (_bool_) – Indicates whether a retention policy is enabled for the storage service. Required.
* **days** (_int_) – Indicates the number of days that metrics or logging or soft-deleted data should be retained. All data older than this value will be deleted.
* **allow_permanent_delete** (_bool_) – Indicates whether permanent delete is allowed on this storage account.
as_dict(_keep_readonly: bool = True, key_transformer: ~typing.Callable[[str,
~typing.Dict[str, ~typing.Any], ~typing.Any], ~typing.Any] = <function
attribute_transformer>, **kwargs: ~typing.Any_) → MutableMapping[str, Any]¶
Return a dict that can be serialized using json.dump.
Advanced usage might optionally use a callback as parameter:
Key is the attribute name used in Python. Attr_desc is a dict of metadata.
Currently contains ‘type’ with the msrest type and ‘key’ with the RestAPI
encoded key. Value is the current value in this object.
The string returned will be used to serialize the key. If the return type is a
list, this is considered hierarchical result dict.
See the three examples in this file:
* attribute_transformer
* full_restapi_key_transformer
* last_restapi_key_transformer
If you want XML serialization, you can pass the kwargs is_xml=True.
Parameters:
**key_transformer** (_function_) – A key transformer function.
Returns:
A dict JSON compatible object
Return type:
dict
_classmethod _deserialize(_data : Any_, _content_type : str | None = None_) → ModelType¶
Parse a str using the RestAPI syntax and return a model.
Parameters:
* **data** (_str_) – A str using RestAPI structure. JSON by default.
* **content_type** (_str_) – JSON by default, set application/xml if XML.
Returns:
An instance of this model
Raises:
DeserializationError if something went wrong
_classmethod _enable_additional_properties_sending() → None¶
_classmethod _from_dict(_data : Any_, _key_extractors : Callable[[str, Dict[str, Any], Any], Any] | None = None_, _content_type : str | None = None_) → ModelType¶
Parse a dict using given key extractor return a model.
By default consider key extractors (rest_key_case_insensitive_extractor,
attribute_key_case_insensitive_extractor and
last_rest_key_case_insensitive_extractor)
Parameters:
* **data** (_dict_) – A dict using RestAPI structure
* **content_type** (_str_) – JSON by default, set application/xml if XML.
Returns:
An instance of this model
Raises:
DeserializationError if something went wrong
_classmethod _is_xml_model() → bool¶
serialize(_keep_readonly : bool = False_, _** kwargs: Any_) →
MutableMapping[str, Any]¶
Return the JSON that would be sent to server from this model.
This is an alias to as_dict(full_restapi_key_transformer,
keep_readonly=False).
If you want XML serialization, you can pass the kwargs is_xml=True.
Parameters:
**keep_readonly** (_bool_) – If you want to serialize the readonly attributes
Returns:
A dict JSON compatible object
Return type:
dict
days _: int | None_ _ = None_¶
enabled _: bool_ _ = False_¶
_class _azure.storage.blob.SequenceNumberAction(_value_ , _names =None_, _*_ ,
_module =None_, _qualname =None_, _type =None_, _start =1_, _boundary
=None_)[source]¶
Sequence number actions.
capitalize()¶
Return a capitalized version of the string.
More specifically, make the first character have upper case and the rest lower
case.
casefold()¶
Return a version of the string suitable for caseless comparisons.
center(_width_ , _fillchar =' '_, _/_)¶
Return a centered string of length width.
Padding is done using the specified fill character (default is a space).
count(_sub_[, _start_[, _end_]]) → int¶
Return the number of non-overlapping occurrences of substring sub in string
S[start:end]. Optional arguments start and end are interpreted as in slice
notation.
encode(_encoding ='utf-8'_, _errors ='strict'_)¶
Encode the string using the codec registered for encoding.
encoding
The encoding in which to encode the string.
errors
The error handling scheme to use for encoding errors. The default is ‘strict’
meaning that encoding errors raise a UnicodeEncodeError. Other possible values
are ‘ignore’, ‘replace’ and ‘xmlcharrefreplace’ as well as any other name
registered with codecs.register_error that can handle UnicodeEncodeErrors.
endswith(_suffix_[, _start_[, _end_]]) → bool¶
Return True if S ends with the specified suffix, False otherwise. With
optional start, test S beginning at that position. With optional end, stop
comparing S at that position. suffix can also be a tuple of strings to try.
expandtabs(_tabsize =8_)¶
Return a copy where all tab characters are expanded using spaces.
If tabsize is not given, a tab size of 8 characters is assumed.
find(_sub_[, _start_[, _end_]]) → int¶
Return the lowest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Return -1 on failure.
format(_* args_, _** kwargs_) → str¶
Return a formatted version of S, using substitutions from args and kwargs. The
substitutions are identified by braces (‘{’ and ‘}’).
format_map(_mapping_) → str¶
Return a formatted version of S, using substitutions from mapping. The
substitutions are identified by braces (‘{’ and ‘}’).
index(_sub_[, _start_[, _end_]]) → int¶
Return the lowest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Raises ValueError when the substring is not found.
isalnum()¶
Return True if the string is an alpha-numeric string, False otherwise.
A string is alpha-numeric if all characters in the string are alpha-numeric
and there is at least one character in the string.
isalpha()¶
Return True if the string is an alphabetic string, False otherwise.
A string is alphabetic if all characters in the string are alphabetic and
there is at least one character in the string.
isascii()¶
Return True if all characters in the string are ASCII, False otherwise.
ASCII characters have code points in the range U+0000-U+007F. Empty string is
ASCII too.
isdecimal()¶
Return True if the string is a decimal string, False otherwise.
A string is a decimal string if all characters in the string are decimal and
there is at least one character in the string.
isdigit()¶
Return True if the string is a digit string, False otherwise.
A string is a digit string if all characters in the string are digits and
there is at least one character in the string.
isidentifier()¶
Return True if the string is a valid Python identifier, False otherwise.
Call keyword.iskeyword(s) to test whether string s is a reserved identifier,
such as “def” or “class”.
islower()¶
Return True if the string is a lowercase string, False otherwise.
A string is lowercase if all cased characters in the string are lowercase and
there is at least one cased character in the string.
isnumeric()¶
Return True if the string is a numeric string, False otherwise.
A string is numeric if all characters in the string are numeric and there is
at least one character in the string.
isprintable()¶
Return True if the string is printable, False otherwise.
A string is printable if all of its characters are considered printable in
repr() or if it is empty.
isspace()¶
Return True if the string is a whitespace string, False otherwise.
A string is whitespace if all characters in the string are whitespace and
there is at least one character in the string.
istitle()¶
Return True if the string is a title-cased string, False otherwise.
In a title-cased string, upper- and title-case characters may only follow
uncased characters and lowercase characters only cased ones.
isupper()¶
Return True if the string is an uppercase string, False otherwise.
A string is uppercase if all cased characters in the string are uppercase and
there is at least one cased character in the string.
join(_iterable_ , _/_)¶
Concatenate any number of strings.
The string whose method is called is inserted in between each given string.
The result is returned as a new string.
Example: ‘.’.join([‘ab’, ‘pq’, ‘rs’]) -> ‘ab.pq.rs’
ljust(_width_ , _fillchar =' '_, _/_)¶
Return a left-justified string of length width.
Padding is done using the specified fill character (default is a space).
lower()¶
Return a copy of the string converted to lowercase.
lstrip(_chars =None_, _/_)¶
Return a copy of the string with leading whitespace removed.
If chars is given and not None, remove characters in chars instead.
_static _maketrans()¶
Return a translation table usable for str.translate().
If there is only one argument, it must be a dictionary mapping Unicode
ordinals (integers) or characters to Unicode ordinals, strings or None.
Character keys will be then converted to ordinals. If there are two arguments,
they must be strings of equal length, and in the resulting dictionary, each
character in x will be mapped to the character at the same position in y. If
there is a third argument, it must be a string, whose characters will be
mapped to None in the result.
partition(_sep_ , _/_)¶
Partition the string into three parts using the given separator.
This will search for the separator in the string. If the separator is found,
returns a 3-tuple containing the part before the separator, the separator
itself, and the part after it.
If the separator is not found, returns a 3-tuple containing the original
string and two empty strings.
removeprefix(_prefix_ , _/_)¶
Return a str with the given prefix string removed if present.
If the string starts with the prefix string, return string[len(prefix):].
Otherwise, return a copy of the original string.
removesuffix(_suffix_ , _/_)¶
Return a str with the given suffix string removed if present.
If the string ends with the suffix string and that suffix is not empty, return
string[:-len(suffix)]. Otherwise, return a copy of the original string.
replace(_old_ , _new_ , _count =-1_, _/_)¶
Return a copy with all occurrences of substring old replaced by new.
> count
>
>
> Maximum number of occurrences to replace. -1 (the default value) means
> replace all occurrences.
If the optional argument count is given, only the first count occurrences are
replaced.
rfind(_sub_[, _start_[, _end_]]) → int¶
Return the highest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Return -1 on failure.
rindex(_sub_[, _start_[, _end_]]) → int¶
Return the highest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Raises ValueError when the substring is not found.
rjust(_width_ , _fillchar =' '_, _/_)¶
Return a right-justified string of length width.
Padding is done using the specified fill character (default is a space).
rpartition(_sep_ , _/_)¶
Partition the string into three parts using the given separator.
This will search for the separator in the string, starting at the end. If the
separator is found, returns a 3-tuple containing the part before the
separator, the separator itself, and the part after it.
If the separator is not found, returns a 3-tuple containing two empty strings
and the original string.
rsplit(_sep =None_, _maxsplit =-1_)¶
Return a list of the substrings in the string, using sep as the separator
string.
> sep
>
>
> The separator used to split the string.
>
> When set to None (the default value), will split on any whitespace character
> (including n r t f and spaces) and will discard empty strings from the
> result.
>
> maxsplit
>
>
> Maximum number of splits. -1 (the default value) means no limit.
Splitting starts at the end of the string and works to the front.
rstrip(_chars =None_, _/_)¶
Return a copy of the string with trailing whitespace removed.
If chars is given and not None, remove characters in chars instead.
split(_sep =None_, _maxsplit =-1_)¶
Return a list of the substrings in the string, using sep as the separator
string.
> sep
>
>
> The separator used to split the string.
>
> When set to None (the default value), will split on any whitespace character
> (including n r t f and spaces) and will discard empty strings from the
> result.
>
> maxsplit
>
>
> Maximum number of splits. -1 (the default value) means no limit.
Splitting starts at the front of the string and works to the end.
Note, str.split() is mainly useful for data that has been intentionally
delimited. With natural text that includes punctuation, consider using the
regular expression module.
splitlines(_keepends =False_)¶
Return a list of the lines in the string, breaking at line boundaries.
Line breaks are not included in the resulting list unless keepends is given
and true.
startswith(_prefix_[, _start_[, _end_]]) → bool¶
Return True if S starts with the specified prefix, False otherwise. With
optional start, test S beginning at that position. With optional end, stop
comparing S at that position. prefix can also be a tuple of strings to try.
strip(_chars =None_, _/_)¶
Return a copy of the string with leading and trailing whitespace removed.
If chars is given and not None, remove characters in chars instead.
swapcase()¶
Convert uppercase characters to lowercase and lowercase characters to
uppercase.
title()¶
Return a version of the string where each word is titlecased.
More specifically, words start with uppercased characters and all remaining
cased characters have lower case.
translate(_table_ , _/_)¶
Replace each character in the string using the given translation table.
> table
>
>
> Translation table, which must be a mapping of Unicode ordinals to Unicode
> ordinals, strings, or None.
The table must implement lookup/indexing via __getitem__, for instance a
dictionary or list. If this operation raises LookupError, the character is
left untouched. Characters mapped to None are deleted.
upper()¶
Return a copy of the string converted to uppercase.
zfill(_width_ , _/_)¶
Pad a numeric string with zeros on the left, to fill a field of the given
width.
The string is never truncated.
INCREMENT _ = 'increment'_¶
Increments the value of the sequence number by 1. If specifying this option,
do not include the x-ms-blob-sequence-number header.
MAX _ = 'max'_¶
Sets the sequence number to be the higher of the value included with the
request and the value currently stored for the blob.
UPDATE _ = 'update'_¶
Sets the sequence number to the value included with the request.
_class _azure.storage.blob.Services(_*_ , _blob : bool = False_, _queue : bool
= False_, _fileshare : bool = False_)[source]¶
Specifies the services accessible with the account SAS.
Keyword Arguments:
* **blob** (_bool_) – Access for the ~azure.storage.blob.BlobServiceClient. Default is False.
* **queue** (_bool_) – Access for the ~azure.storage.queue.QueueServiceClient. Default is False.
* **fileshare** (_bool_) – Access for the ~azure.storage.fileshare.ShareServiceClient. Default is False.
_classmethod _from_string(_string_)[source]¶
Create Services from a string.
To specify blob, queue, or file you need only to include the first letter of
the word in the string. E.g. for blob and queue you would provide a string
“bq”.
Parameters:
**string** (_str_) – Specify blob, queue, or file in in the string with the
first letter of the word.
Returns:
A Services object
Return type:
_Services_
_class _azure.storage.blob.StandardBlobTier(_value_ , _names =None_, _*_ ,
_module =None_, _qualname =None_, _type =None_, _start =1_, _boundary
=None_)[source]¶
Specifies the blob tier to set the blob to. This is only applicable for block
blobs on standard storage accounts.
capitalize()¶
Return a capitalized version of the string.
More specifically, make the first character have upper case and the rest lower
case.
casefold()¶
Return a version of the string suitable for caseless comparisons.
center(_width_ , _fillchar =' '_, _/_)¶
Return a centered string of length width.
Padding is done using the specified fill character (default is a space).
count(_sub_[, _start_[, _end_]]) → int¶
Return the number of non-overlapping occurrences of substring sub in string
S[start:end]. Optional arguments start and end are interpreted as in slice
notation.
encode(_encoding ='utf-8'_, _errors ='strict'_)¶
Encode the string using the codec registered for encoding.
encoding
The encoding in which to encode the string.
errors
The error handling scheme to use for encoding errors. The default is ‘strict’
meaning that encoding errors raise a UnicodeEncodeError. Other possible values
are ‘ignore’, ‘replace’ and ‘xmlcharrefreplace’ as well as any other name
registered with codecs.register_error that can handle UnicodeEncodeErrors.
endswith(_suffix_[, _start_[, _end_]]) → bool¶
Return True if S ends with the specified suffix, False otherwise. With
optional start, test S beginning at that position. With optional end, stop
comparing S at that position. suffix can also be a tuple of strings to try.
expandtabs(_tabsize =8_)¶
Return a copy where all tab characters are expanded using spaces.
If tabsize is not given, a tab size of 8 characters is assumed.
find(_sub_[, _start_[, _end_]]) → int¶
Return the lowest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Return -1 on failure.
format(_* args_, _** kwargs_) → str¶
Return a formatted version of S, using substitutions from args and kwargs. The
substitutions are identified by braces (‘{’ and ‘}’).
format_map(_mapping_) → str¶
Return a formatted version of S, using substitutions from mapping. The
substitutions are identified by braces (‘{’ and ‘}’).
index(_sub_[, _start_[, _end_]]) → int¶
Return the lowest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Raises ValueError when the substring is not found.
isalnum()¶
Return True if the string is an alpha-numeric string, False otherwise.
A string is alpha-numeric if all characters in the string are alpha-numeric
and there is at least one character in the string.
isalpha()¶
Return True if the string is an alphabetic string, False otherwise.
A string is alphabetic if all characters in the string are alphabetic and
there is at least one character in the string.
isascii()¶
Return True if all characters in the string are ASCII, False otherwise.
ASCII characters have code points in the range U+0000-U+007F. Empty string is
ASCII too.
isdecimal()¶
Return True if the string is a decimal string, False otherwise.
A string is a decimal string if all characters in the string are decimal and
there is at least one character in the string.
isdigit()¶
Return True if the string is a digit string, False otherwise.
A string is a digit string if all characters in the string are digits and
there is at least one character in the string.
isidentifier()¶
Return True if the string is a valid Python identifier, False otherwise.
Call keyword.iskeyword(s) to test whether string s is a reserved identifier,
such as “def” or “class”.
islower()¶
Return True if the string is a lowercase string, False otherwise.
A string is lowercase if all cased characters in the string are lowercase and
there is at least one cased character in the string.
isnumeric()¶
Return True if the string is a numeric string, False otherwise.
A string is numeric if all characters in the string are numeric and there is
at least one character in the string.
isprintable()¶
Return True if the string is printable, False otherwise.
A string is printable if all of its characters are considered printable in
repr() or if it is empty.
isspace()¶
Return True if the string is a whitespace string, False otherwise.
A string is whitespace if all characters in the string are whitespace and
there is at least one character in the string.
istitle()¶
Return True if the string is a title-cased string, False otherwise.
In a title-cased string, upper- and title-case characters may only follow
uncased characters and lowercase characters only cased ones.
isupper()¶
Return True if the string is an uppercase string, False otherwise.
A string is uppercase if all cased characters in the string are uppercase and
there is at least one cased character in the string.
join(_iterable_ , _/_)¶
Concatenate any number of strings.
The string whose method is called is inserted in between each given string.
The result is returned as a new string.
Example: ‘.’.join([‘ab’, ‘pq’, ‘rs’]) -> ‘ab.pq.rs’
ljust(_width_ , _fillchar =' '_, _/_)¶
Return a left-justified string of length width.
Padding is done using the specified fill character (default is a space).
lower()¶
Return a copy of the string converted to lowercase.
lstrip(_chars =None_, _/_)¶
Return a copy of the string with leading whitespace removed.
If chars is given and not None, remove characters in chars instead.
_static _maketrans()¶
Return a translation table usable for str.translate().
If there is only one argument, it must be a dictionary mapping Unicode
ordinals (integers) or characters to Unicode ordinals, strings or None.
Character keys will be then converted to ordinals. If there are two arguments,
they must be strings of equal length, and in the resulting dictionary, each
character in x will be mapped to the character at the same position in y. If
there is a third argument, it must be a string, whose characters will be
mapped to None in the result.
partition(_sep_ , _/_)¶
Partition the string into three parts using the given separator.
This will search for the separator in the string. If the separator is found,
returns a 3-tuple containing the part before the separator, the separator
itself, and the part after it.
If the separator is not found, returns a 3-tuple containing the original
string and two empty strings.
removeprefix(_prefix_ , _/_)¶
Return a str with the given prefix string removed if present.
If the string starts with the prefix string, return string[len(prefix):].
Otherwise, return a copy of the original string.
removesuffix(_suffix_ , _/_)¶
Return a str with the given suffix string removed if present.
If the string ends with the suffix string and that suffix is not empty, return
string[:-len(suffix)]. Otherwise, return a copy of the original string.
replace(_old_ , _new_ , _count =-1_, _/_)¶
Return a copy with all occurrences of substring old replaced by new.
> count
>
>
> Maximum number of occurrences to replace. -1 (the default value) means
> replace all occurrences.
If the optional argument count is given, only the first count occurrences are
replaced.
rfind(_sub_[, _start_[, _end_]]) → int¶
Return the highest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Return -1 on failure.
rindex(_sub_[, _start_[, _end_]]) → int¶
Return the highest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Raises ValueError when the substring is not found.
rjust(_width_ , _fillchar =' '_, _/_)¶
Return a right-justified string of length width.
Padding is done using the specified fill character (default is a space).
rpartition(_sep_ , _/_)¶
Partition the string into three parts using the given separator.
This will search for the separator in the string, starting at the end. If the
separator is found, returns a 3-tuple containing the part before the
separator, the separator itself, and the part after it.
If the separator is not found, returns a 3-tuple containing two empty strings
and the original string.
rsplit(_sep =None_, _maxsplit =-1_)¶
Return a list of the substrings in the string, using sep as the separator
string.
> sep
>
>
> The separator used to split the string.
>
> When set to None (the default value), will split on any whitespace character
> (including n r t f and spaces) and will discard empty strings from the
> result.
>
> maxsplit
>
>
> Maximum number of splits. -1 (the default value) means no limit.
Splitting starts at the end of the string and works to the front.
rstrip(_chars =None_, _/_)¶
Return a copy of the string with trailing whitespace removed.
If chars is given and not None, remove characters in chars instead.
split(_sep =None_, _maxsplit =-1_)¶
Return a list of the substrings in the string, using sep as the separator
string.
> sep
>
>
> The separator used to split the string.
>
> When set to None (the default value), will split on any whitespace character
> (including n r t f and spaces) and will discard empty strings from the
> result.
>
> maxsplit
>
>
> Maximum number of splits. -1 (the default value) means no limit.
Splitting starts at the front of the string and works to the end.
Note, str.split() is mainly useful for data that has been intentionally
delimited. With natural text that includes punctuation, consider using the
regular expression module.
splitlines(_keepends =False_)¶
Return a list of the lines in the string, breaking at line boundaries.
Line breaks are not included in the resulting list unless keepends is given
and true.
startswith(_prefix_[, _start_[, _end_]]) → bool¶
Return True if S starts with the specified prefix, False otherwise. With
optional start, test S beginning at that position. With optional end, stop
comparing S at that position. prefix can also be a tuple of strings to try.
strip(_chars =None_, _/_)¶
Return a copy of the string with leading and trailing whitespace removed.
If chars is given and not None, remove characters in chars instead.
swapcase()¶
Convert uppercase characters to lowercase and lowercase characters to
uppercase.
title()¶
Return a version of the string where each word is titlecased.
More specifically, words start with uppercased characters and all remaining
cased characters have lower case.
translate(_table_ , _/_)¶
Replace each character in the string using the given translation table.
> table
>
>
> Translation table, which must be a mapping of Unicode ordinals to Unicode
> ordinals, strings, or None.
The table must implement lookup/indexing via __getitem__, for instance a
dictionary or list. If this operation raises LookupError, the character is
left untouched. Characters mapped to None are deleted.
upper()¶
Return a copy of the string converted to uppercase.
zfill(_width_ , _/_)¶
Pad a numeric string with zeros on the left, to fill a field of the given
width.
The string is never truncated.
ARCHIVE _ = 'Archive'_¶
Archive
COLD _ = 'Cold'_¶
Cold
COOL _ = 'Cool'_¶
Cool
HOT _ = 'Hot'_¶
Hot
_class _azure.storage.blob.StaticWebsite(_** kwargs: Any_)[source]¶
The properties that enable an account to host a static website.
Keyword Arguments:
* **enabled** (_bool_) – Indicates whether this account is hosting a static website. The default value is False.
* **index_document** (_str_) – The default name of the index page under each directory.
* **error_document404_path** (_str_) – The absolute path of the custom 404 page.
* **default_index_document_path** (_str_) – Absolute path of the default index page.
* **enabled** – Indicates whether this account is hosting a static website. Required.
* **index_document** – The default name of the index page under each directory.
* **error_document404_path** – The absolute path of the custom 404 page.
* **default_index_document_path** – Absolute path of the default index page.
as_dict(_keep_readonly: bool = True, key_transformer: ~typing.Callable[[str,
~typing.Dict[str, ~typing.Any], ~typing.Any], ~typing.Any] = <function
attribute_transformer>, **kwargs: ~typing.Any_) → MutableMapping[str, Any]¶
Return a dict that can be serialized using json.dump.
Advanced usage might optionally use a callback as parameter:
Key is the attribute name used in Python. Attr_desc is a dict of metadata.
Currently contains ‘type’ with the msrest type and ‘key’ with the RestAPI
encoded key. Value is the current value in this object.
The string returned will be used to serialize the key. If the return type is a
list, this is considered hierarchical result dict.
See the three examples in this file:
* attribute_transformer
* full_restapi_key_transformer
* last_restapi_key_transformer
If you want XML serialization, you can pass the kwargs is_xml=True.
Parameters:
**key_transformer** (_function_) – A key transformer function.
Returns:
A dict JSON compatible object
Return type:
dict
_classmethod _deserialize(_data : Any_, _content_type : str | None = None_) → ModelType¶
Parse a str using the RestAPI syntax and return a model.
Parameters:
* **data** (_str_) – A str using RestAPI structure. JSON by default.
* **content_type** (_str_) – JSON by default, set application/xml if XML.
Returns:
An instance of this model
Raises:
DeserializationError if something went wrong
_classmethod _enable_additional_properties_sending() → None¶
_classmethod _from_dict(_data : Any_, _key_extractors : Callable[[str, Dict[str, Any], Any], Any] | None = None_, _content_type : str | None = None_) → ModelType¶
Parse a dict using given key extractor return a model.
By default consider key extractors (rest_key_case_insensitive_extractor,
attribute_key_case_insensitive_extractor and
last_rest_key_case_insensitive_extractor)
Parameters:
* **data** (_dict_) – A dict using RestAPI structure
* **content_type** (_str_) – JSON by default, set application/xml if XML.
Returns:
An instance of this model
Raises:
DeserializationError if something went wrong
_classmethod _is_xml_model() → bool¶
serialize(_keep_readonly : bool = False_, _** kwargs: Any_) →
MutableMapping[str, Any]¶
Return the JSON that would be sent to server from this model.
This is an alias to as_dict(full_restapi_key_transformer,
keep_readonly=False).
If you want XML serialization, you can pass the kwargs is_xml=True.
Parameters:
**keep_readonly** (_bool_) – If you want to serialize the readonly attributes
Returns:
A dict JSON compatible object
Return type:
dict
default_index_document_path _: str | None_¶
Absolute path of the default index page.
enabled _: bool_ _ = False_¶
Indicates whether this account is hosting a static website.
error_document404_path _: str | None_¶
The absolute path of the custom 404 page.
index_document _: str | None_¶
The default name of the index page under each directory.
_class _azure.storage.blob.StorageErrorCode(_value_ , _names =None_, _*_ ,
_module =None_, _qualname =None_, _type =None_, _start =1_, _boundary
=None_)[source]¶
capitalize()¶
Return a capitalized version of the string.
More specifically, make the first character have upper case and the rest lower
case.
casefold()¶
Return a version of the string suitable for caseless comparisons.
center(_width_ , _fillchar =' '_, _/_)¶
Return a centered string of length width.
Padding is done using the specified fill character (default is a space).
count(_sub_[, _start_[, _end_]]) → int¶
Return the number of non-overlapping occurrences of substring sub in string
S[start:end]. Optional arguments start and end are interpreted as in slice
notation.
encode(_encoding ='utf-8'_, _errors ='strict'_)¶
Encode the string using the codec registered for encoding.
encoding
The encoding in which to encode the string.
errors
The error handling scheme to use for encoding errors. The default is ‘strict’
meaning that encoding errors raise a UnicodeEncodeError. Other possible values
are ‘ignore’, ‘replace’ and ‘xmlcharrefreplace’ as well as any other name
registered with codecs.register_error that can handle UnicodeEncodeErrors.
endswith(_suffix_[, _start_[, _end_]]) → bool¶
Return True if S ends with the specified suffix, False otherwise. With
optional start, test S beginning at that position. With optional end, stop
comparing S at that position. suffix can also be a tuple of strings to try.
expandtabs(_tabsize =8_)¶
Return a copy where all tab characters are expanded using spaces.
If tabsize is not given, a tab size of 8 characters is assumed.
find(_sub_[, _start_[, _end_]]) → int¶
Return the lowest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Return -1 on failure.
format(_* args_, _** kwargs_) → str¶
Return a formatted version of S, using substitutions from args and kwargs. The
substitutions are identified by braces (‘{’ and ‘}’).
format_map(_mapping_) → str¶
Return a formatted version of S, using substitutions from mapping. The
substitutions are identified by braces (‘{’ and ‘}’).
index(_sub_[, _start_[, _end_]]) → int¶
Return the lowest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Raises ValueError when the substring is not found.
isalnum()¶
Return True if the string is an alpha-numeric string, False otherwise.
A string is alpha-numeric if all characters in the string are alpha-numeric
and there is at least one character in the string.
isalpha()¶
Return True if the string is an alphabetic string, False otherwise.
A string is alphabetic if all characters in the string are alphabetic and
there is at least one character in the string.
isascii()¶
Return True if all characters in the string are ASCII, False otherwise.
ASCII characters have code points in the range U+0000-U+007F. Empty string is
ASCII too.
isdecimal()¶
Return True if the string is a decimal string, False otherwise.
A string is a decimal string if all characters in the string are decimal and
there is at least one character in the string.
isdigit()¶
Return True if the string is a digit string, False otherwise.
A string is a digit string if all characters in the string are digits and
there is at least one character in the string.
isidentifier()¶
Return True if the string is a valid Python identifier, False otherwise.
Call keyword.iskeyword(s) to test whether string s is a reserved identifier,
such as “def” or “class”.
islower()¶
Return True if the string is a lowercase string, False otherwise.
A string is lowercase if all cased characters in the string are lowercase and
there is at least one cased character in the string.
isnumeric()¶
Return True if the string is a numeric string, False otherwise.
A string is numeric if all characters in the string are numeric and there is
at least one character in the string.
isprintable()¶
Return True if the string is printable, False otherwise.
A string is printable if all of its characters are considered printable in
repr() or if it is empty.
isspace()¶
Return True if the string is a whitespace string, False otherwise.
A string is whitespace if all characters in the string are whitespace and
there is at least one character in the string.
istitle()¶
Return True if the string is a title-cased string, False otherwise.
In a title-cased string, upper- and title-case characters may only follow
uncased characters and lowercase characters only cased ones.
isupper()¶
Return True if the string is an uppercase string, False otherwise.
A string is uppercase if all cased characters in the string are uppercase and
there is at least one cased character in the string.
join(_iterable_ , _/_)¶
Concatenate any number of strings.
The string whose method is called is inserted in between each given string.
The result is returned as a new string.
Example: ‘.’.join([‘ab’, ‘pq’, ‘rs’]) -> ‘ab.pq.rs’
ljust(_width_ , _fillchar =' '_, _/_)¶
Return a left-justified string of length width.
Padding is done using the specified fill character (default is a space).
lower()¶
Return a copy of the string converted to lowercase.
lstrip(_chars =None_, _/_)¶
Return a copy of the string with leading whitespace removed.
If chars is given and not None, remove characters in chars instead.
_static _maketrans()¶
Return a translation table usable for str.translate().
If there is only one argument, it must be a dictionary mapping Unicode
ordinals (integers) or characters to Unicode ordinals, strings or None.
Character keys will be then converted to ordinals. If there are two arguments,
they must be strings of equal length, and in the resulting dictionary, each
character in x will be mapped to the character at the same position in y. If
there is a third argument, it must be a string, whose characters will be
mapped to None in the result.
partition(_sep_ , _/_)¶
Partition the string into three parts using the given separator.
This will search for the separator in the string. If the separator is found,
returns a 3-tuple containing the part before the separator, the separator
itself, and the part after it.
If the separator is not found, returns a 3-tuple containing the original
string and two empty strings.
removeprefix(_prefix_ , _/_)¶
Return a str with the given prefix string removed if present.
If the string starts with the prefix string, return string[len(prefix):].
Otherwise, return a copy of the original string.
removesuffix(_suffix_ , _/_)¶
Return a str with the given suffix string removed if present.
If the string ends with the suffix string and that suffix is not empty, return
string[:-len(suffix)]. Otherwise, return a copy of the original string.
replace(_old_ , _new_ , _count =-1_, _/_)¶
Return a copy with all occurrences of substring old replaced by new.
> count
>
>
> Maximum number of occurrences to replace. -1 (the default value) means
> replace all occurrences.
If the optional argument count is given, only the first count occurrences are
replaced.
rfind(_sub_[, _start_[, _end_]]) → int¶
Return the highest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Return -1 on failure.
rindex(_sub_[, _start_[, _end_]]) → int¶
Return the highest index in S where substring sub is found, such that sub is
contained within S[start:end]. Optional arguments start and end are
interpreted as in slice notation.
Raises ValueError when the substring is not found.
rjust(_width_ , _fillchar =' '_, _/_)¶
Return a right-justified string of length width.
Padding is done using the specified fill character (default is a space).
rpartition(_sep_ , _/_)¶
Partition the string into three parts using the given separator.
This will search for the separator in the string, starting at the end. If the
separator is found, returns a 3-tuple containing the part before the
separator, the separator itself, and the part after it.
If the separator is not found, returns a 3-tuple containing two empty strings
and the original string.
rsplit(_sep =None_, _maxsplit =-1_)¶
Return a list of the substrings in the string, using sep as the separator
string.
> sep
>
>
> The separator used to split the string.
>
> When set to None (the default value), will split on any whitespace character
> (including n r t f and spaces) and will discard empty strings from the
> result.
>
> maxsplit
>
>
> Maximum number of splits. -1 (the default value) means no limit.
Splitting starts at the end of the string and works to the front.
rstrip(_chars =None_, _/_)¶
Return a copy of the string with trailing whitespace removed.
If chars is given and not None, remove characters in chars instead.
split(_sep =None_, _maxsplit =-1_)¶
Return a list of the substrings in the string, using sep as the separator
string.
> sep
>
>
> The separator used to split the string.
>
> When set to None (the default value), will split on any whitespace character
> (including n r t f and spaces) and will discard empty strings from the
> result.
>
> maxsplit
>
>
> Maximum number of splits. -1 (the default value) means no limit.
Splitting starts at the front of the string and works to the end.
Note, str.split() is mainly useful for data that has been intentionally
delimited. With natural text that includes punctuation, consider using the
regular expression module.
splitlines(_keepends =False_)¶
Return a list of the lines in the string, breaking at line boundaries.
Line breaks are not included in the resulting list unless keepends is given
and true.
startswith(_prefix_[, _start_[, _end_]]) → bool¶
Return True if S starts with the specified prefix, False otherwise. With
optional start, test S beginning at that position. With optional end, stop
comparing S at that position. prefix can also be a tuple of strings to try.
strip(_chars =None_, _/_)¶
Return a copy of the string with leading and trailing whitespace removed.
If chars is given and not None, remove characters in chars instead.
swapcase()¶
Convert uppercase characters to lowercase and lowercase characters to
uppercase.
title()¶
Return a version of the string where each word is titlecased.
More specifically, words start with uppercased characters and all remaining
cased characters have lower case.
translate(_table_ , _/_)¶
Replace each character in the string using the given translation table.
> table
>
>
> Translation table, which must be a mapping of Unicode ordinals to Unicode
> ordinals, strings, or None.
The table must implement lookup/indexing via __getitem__, for instance a
dictionary or list. If this operation raises LookupError, the character is
left untouched. Characters mapped to None are deleted.
upper()¶
Return a copy of the string converted to uppercase.
zfill(_width_ , _/_)¶
Pad a numeric string with zeros on the left, to fill a field of the given
width.
The string is never truncated.
ACCOUNT_ALREADY_EXISTS _ = 'AccountAlreadyExists'_¶
ACCOUNT_BEING_CREATED _ = 'AccountBeingCreated'_¶
ACCOUNT_IS_DISABLED _ = 'AccountIsDisabled'_¶
APPEND_POSITION_CONDITION_NOT_MET _ = 'AppendPositionConditionNotMet'_¶
AUTHENTICATION_FAILED _ = 'AuthenticationFailed'_¶
AUTHORIZATION_FAILURE _ = 'AuthorizationFailure'_¶
BLOB_ALREADY_EXISTS _ = 'BlobAlreadyExists'_¶
BLOB_ARCHIVED _ = 'BlobArchived'_¶
BLOB_BEING_REHYDRATED _ = 'BlobBeingRehydrated'_¶
BLOB_NOT_ARCHIVED _ = 'BlobNotArchived'_¶
BLOB_NOT_FOUND _ = 'BlobNotFound'_¶
BLOB_OVERWRITTEN _ = 'BlobOverwritten'_¶
BLOB_TIER_INADEQUATE_FOR_CONTENT_LENGTH _ =
'BlobTierInadequateForContentLength'_¶
BLOCK_COUNT_EXCEEDS_LIMIT _ = 'BlockCountExceedsLimit'_¶
BLOCK_LIST_TOO_LONG _ = 'BlockListTooLong'_¶
CANNOT_CHANGE_TO_LOWER_TIER _ = 'CannotChangeToLowerTier'_¶
CANNOT_DELETE_FILE_OR_DIRECTORY _ = 'CannotDeleteFileOrDirectory'_¶
CANNOT_VERIFY_COPY_SOURCE _ = 'CannotVerifyCopySource'_¶
CLIENT_CACHE_FLUSH_DELAY _ = 'ClientCacheFlushDelay'_¶
CONDITION_HEADERS_NOT_SUPPORTED _ = 'ConditionHeadersNotSupported'_¶
CONDITION_NOT_MET _ = 'ConditionNotMet'_¶
CONTAINER_ALREADY_EXISTS _ = 'ContainerAlreadyExists'_¶
CONTAINER_BEING_DELETED _ = 'ContainerBeingDeleted'_¶
CONTAINER_DISABLED _ = 'ContainerDisabled'_¶
CONTAINER_NOT_FOUND _ = 'ContainerNotFound'_¶
CONTAINER_QUOTA_DOWNGRADE_NOT_ALLOWED _ =
'ContainerQuotaDowngradeNotAllowed'_¶
CONTENT_LENGTH_LARGER_THAN_TIER_LIMIT _ = 'ContentLengthLargerThanTierLimit'_¶
CONTENT_LENGTH_MUST_BE_ZERO _ = 'ContentLengthMustBeZero'_¶
COPY_ACROSS_ACCOUNTS_NOT_SUPPORTED _ = 'CopyAcrossAccountsNotSupported'_¶
COPY_ID_MISMATCH _ = 'CopyIdMismatch'_¶
DELETE_PENDING _ = 'DeletePending'_¶
DESTINATION_PATH_IS_BEING_DELETED _ = 'DestinationPathIsBeingDeleted'_¶
DIRECTORY_NOT_EMPTY _ = 'DirectoryNotEmpty'_¶
EMPTY_METADATA_KEY _ = 'EmptyMetadataKey'_¶
FEATURE_VERSION_MISMATCH _ = 'FeatureVersionMismatch'_¶
FILE_LOCK_CONFLICT _ = 'FileLockConflict'_¶
FILE_SYSTEM_ALREADY_EXISTS _ = 'FilesystemAlreadyExists'_¶
FILE_SYSTEM_BEING_DELETED _ = 'FilesystemBeingDeleted'_¶
FILE_SYSTEM_NOT_FOUND _ = 'FilesystemNotFound'_¶
INCREMENTAL_COPY_BLOB_MISMATCH _ = 'IncrementalCopyBlobMismatch'_¶
INCREMENTAL_COPY_OF_EARLIER_VERSION_SNAPSHOT_NOT_ALLOWED _ =
'IncrementalCopyOfEarlierVersionSnapshotNotAllowed'_¶
INCREMENTAL_COPY_OF_ERALIER_VERSION_SNAPSHOT_NOT_ALLOWED _ =
'IncrementalCopyOfEarlierVersionSnapshotNotAllowed'_¶
Please use INCREMENTAL_COPY_OF_EARLIER_VERSION_SNAPSHOT_NOT_ALLOWED instead.
Type:
Deprecated
INCREMENTAL_COPY_SOURCE_MUST_BE_SNAPSHOT _ =
'IncrementalCopySourceMustBeSnapshot'_¶
INFINITE_LEASE_DURATION_REQUIRED _ = 'InfiniteLeaseDurationRequired'_¶
INSUFFICIENT_ACCOUNT_PERMISSIONS _ = 'InsufficientAccountPermissions'_¶
INTERNAL_ERROR _ = 'InternalError'_¶
INVALID_AUTHENTICATION_INFO _ = 'InvalidAuthenticationInfo'_¶
INVALID_BLOB_OR_BLOCK _ = 'InvalidBlobOrBlock'_¶
INVALID_BLOB_TIER _ = 'InvalidBlobTier'_¶
INVALID_BLOB_TYPE _ = 'InvalidBlobType'_¶
INVALID_BLOCK_ID _ = 'InvalidBlockId'_¶
INVALID_BLOCK_LIST _ = 'InvalidBlockList'_¶
INVALID_DESTINATION_PATH _ = 'InvalidDestinationPath'_¶
INVALID_FILE_OR_DIRECTORY_PATH_NAME _ = 'InvalidFileOrDirectoryPathName'_¶
INVALID_FLUSH_POSITION _ = 'InvalidFlushPosition'_¶
INVALID_HEADER_VALUE _ = 'InvalidHeaderValue'_¶
INVALID_HTTP_VERB _ = 'InvalidHttpVerb'_¶
INVALID_INPUT _ = 'InvalidInput'_¶
INVALID_MARKER _ = 'InvalidMarker'_¶
INVALID_MD5 _ = 'InvalidMd5'_¶
INVALID_METADATA _ = 'InvalidMetadata'_¶
INVALID_OPERATION _ = 'InvalidOperation'_¶
INVALID_PAGE_RANGE _ = 'InvalidPageRange'_¶
INVALID_PROPERTY_NAME _ = 'InvalidPropertyName'_¶
INVALID_QUERY_PARAMETER_VALUE _ = 'InvalidQueryParameterValue'_¶
INVALID_RANGE _ = 'InvalidRange'_¶
INVALID_RENAME_SOURCE_PATH _ = 'InvalidRenameSourcePath'_¶
INVALID_RESOURCE_NAME _ = 'InvalidResourceName'_¶
INVALID_SOURCE_BLOB_TYPE _ = 'InvalidSourceBlobType'_¶
INVALID_SOURCE_BLOB_URL _ = 'InvalidSourceBlobUrl'_¶
INVALID_SOURCE_OR_DESTINATION_RESOURCE_TYPE _ =
'InvalidSourceOrDestinationResourceType'_¶
INVALID_SOURCE_URI _ = 'InvalidSourceUri'_¶
INVALID_URI _ = 'InvalidUri'_¶
INVALID_VERSION_FOR_PAGE_BLOB_OPERATION _ =
'InvalidVersionForPageBlobOperation'_¶
INVALID_XML_DOCUMENT _ = 'InvalidXmlDocument'_¶
INVALID_XML_NODE_VALUE _ = 'InvalidXmlNodeValue'_¶
LEASE_ALREADY_BROKEN _ = 'LeaseAlreadyBroken'_¶
LEASE_ALREADY_PRESENT _ = 'LeaseAlreadyPresent'_¶
LEASE_ID_MISMATCH_WITH_BLOB_OPERATION _ = 'LeaseIdMismatchWithBlobOperation'_¶
LEASE_ID_MISMATCH_WITH_CONTAINER_OPERATION _ =
'LeaseIdMismatchWithContainerOperation'_¶
LEASE_ID_MISMATCH_WITH_LEASE_OPERATION _ =
'LeaseIdMismatchWithLeaseOperation'_¶
LEASE_ID_MISSING _ = 'LeaseIdMissing'_¶
LEASE_IS_ALREADY_BROKEN _ = 'LeaseIsAlreadyBroken'_¶
LEASE_IS_BREAKING_AND_CANNOT_BE_ACQUIRED _ =
'LeaseIsBreakingAndCannotBeAcquired'_¶
LEASE_IS_BREAKING_AND_CANNOT_BE_CHANGED _ =
'LeaseIsBreakingAndCannotBeChanged'_¶
LEASE_IS_BROKEN_AND_CANNOT_BE_RENEWED _ = 'LeaseIsBrokenAndCannotBeRenewed'_¶
LEASE_LOST _ = 'LeaseLost'_¶
LEASE_NAME_MISMATCH _ = 'LeaseNameMismatch'_¶
LEASE_NOT_PRESENT_WITH_BLOB_OPERATION _ = 'LeaseNotPresentWithBlobOperation'_¶
LEASE_NOT_PRESENT_WITH_CONTAINER_OPERATION _ =
'LeaseNotPresentWithContainerOperation'_¶
LEASE_NOT_PRESENT_WITH_LEASE_OPERATION _ =
'LeaseNotPresentWithLeaseOperation'_¶
MAX_BLOB_SIZE_CONDITION_NOT_MET _ = 'MaxBlobSizeConditionNotMet'_¶
MD5_MISMATCH _ = 'Md5Mismatch'_¶
MESSAGE_NOT_FOUND _ = 'MessageNotFound'_¶
MESSAGE_TOO_LARGE _ = 'MessageTooLarge'_¶
METADATA_TOO_LARGE _ = 'MetadataTooLarge'_¶
MISSING_CONTENT_LENGTH_HEADER _ = 'MissingContentLengthHeader'_¶
MISSING_REQUIRED_HEADER _ = 'MissingRequiredHeader'_¶
MISSING_REQUIRED_QUERY_PARAMETER _ = 'MissingRequiredQueryParameter'_¶
MISSING_REQUIRED_XML_NODE _ = 'MissingRequiredXmlNode'_¶
MULTIPLE_CONDITION_HEADERS_NOT_SUPPORTED _ =
'MultipleConditionHeadersNotSupported'_¶
NO_AUTHENTICATION_INFORMATION _ = 'NoAuthenticationInformation'_¶
NO_PENDING_COPY_OPERATION _ = 'NoPendingCopyOperation'_¶
OPERATION_NOT_ALLOWED_ON_INCREMENTAL_COPY_BLOB _ =
'OperationNotAllowedOnIncrementalCopyBlob'_¶
OPERATION_TIMED_OUT _ = 'OperationTimedOut'_¶
OUT_OF_RANGE_INPUT _ = 'OutOfRangeInput'_¶
OUT_OF_RANGE_QUERY_PARAMETER_VALUE _ = 'OutOfRangeQueryParameterValue'_¶
PARENT_NOT_FOUND _ = 'ParentNotFound'_¶
PATH_ALREADY_EXISTS _ = 'PathAlreadyExists'_¶
PATH_CONFLICT _ = 'PathConflict'_¶
PATH_NOT_FOUND _ = 'PathNotFound'_¶
PENDING_COPY_OPERATION _ = 'PendingCopyOperation'_¶
POP_RECEIPT_MISMATCH _ = 'PopReceiptMismatch'_¶
PREVIOUS_SNAPSHOT_CANNOT_BE_NEWER _ = 'PreviousSnapshotCannotBeNewer'_¶
PREVIOUS_SNAPSHOT_NOT_FOUND _ = 'PreviousSnapshotNotFound'_¶
PREVIOUS_SNAPSHOT_OPERATION_NOT_SUPPORTED _ =
'PreviousSnapshotOperationNotSupported'_¶
QUEUE_ALREADY_EXISTS _ = 'QueueAlreadyExists'_¶
QUEUE_BEING_DELETED _ = 'QueueBeingDeleted'_¶
QUEUE_DISABLED _ = 'QueueDisabled'_¶
QUEUE_NOT_EMPTY _ = 'QueueNotEmpty'_¶
QUEUE_NOT_FOUND _ = 'QueueNotFound'_¶
READ_ONLY_ATTRIBUTE _ = 'ReadOnlyAttribute'_¶
RENAME_DESTINATION_PARENT_PATH_NOT_FOUND _ =
'RenameDestinationParentPathNotFound'_¶
REQUEST_BODY_TOO_LARGE _ = 'RequestBodyTooLarge'_¶
REQUEST_URL_FAILED_TO_PARSE _ = 'RequestUrlFailedToParse'_¶
RESOURCE_ALREADY_EXISTS _ = 'ResourceAlreadyExists'_¶
RESOURCE_NOT_FOUND _ = 'ResourceNotFound'_¶
RESOURCE_TYPE_MISMATCH _ = 'ResourceTypeMismatch'_¶
SEQUENCE_NUMBER_CONDITION_NOT_MET _ = 'SequenceNumberConditionNotMet'_¶
SEQUENCE_NUMBER_INCREMENT_TOO_LARGE _ = 'SequenceNumberIncrementTooLarge'_¶
SERVER_BUSY _ = 'ServerBusy'_¶
SHARE_ALREADY_EXISTS _ = 'ShareAlreadyExists'_¶
SHARE_BEING_DELETED _ = 'ShareBeingDeleted'_¶
SHARE_DISABLED _ = 'ShareDisabled'_¶
SHARE_HAS_SNAPSHOTS _ = 'ShareHasSnapshots'_¶
SHARE_NOT_FOUND _ = 'ShareNotFound'_¶
SHARE_SNAPSHOT_COUNT_EXCEEDED _ = 'ShareSnapshotCountExceeded'_¶
SHARE_SNAPSHOT_IN_PROGRESS _ = 'ShareSnapshotInProgress'_¶
SHARE_SNAPSHOT_OPERATION_NOT_SUPPORTED _ =
'ShareSnapshotOperationNotSupported'_¶
SHARING_VIOLATION _ = 'SharingViolation'_¶
SNAPHOT_OPERATION_RATE_EXCEEDED _ = 'SnapshotOperationRateExceeded'_¶
Please use SNAPSHOT_OPERATION_RATE_EXCEEDED instead.
Type:
Deprecated
SNAPSHOTS_PRESENT _ = 'SnapshotsPresent'_¶
SNAPSHOT_COUNT_EXCEEDED _ = 'SnapshotCountExceeded'_¶
SNAPSHOT_OPERATION_RATE_EXCEEDED _ = 'SnapshotOperationRateExceeded'_¶
SOURCE_CONDITION_NOT_MET _ = 'SourceConditionNotMet'_¶
SOURCE_PATH_IS_BEING_DELETED _ = 'SourcePathIsBeingDeleted'_¶
SOURCE_PATH_NOT_FOUND _ = 'SourcePathNotFound'_¶
SYSTEM_IN_USE _ = 'SystemInUse'_¶
TARGET_CONDITION_NOT_MET _ = 'TargetConditionNotMet'_¶
UNAUTHORIZED_BLOB_OVERWRITE _ = 'UnauthorizedBlobOverwrite'_¶
UNSUPPORTED_HEADER _ = 'UnsupportedHeader'_¶
UNSUPPORTED_HTTP_VERB _ = 'UnsupportedHttpVerb'_¶
UNSUPPORTED_QUERY_PARAMETER _ = 'UnsupportedQueryParameter'_¶
UNSUPPORTED_REST_VERSION _ = 'UnsupportedRestVersion'_¶
UNSUPPORTED_XML_NODE _ = 'UnsupportedXmlNode'_¶
_class _azure.storage.blob.StorageStreamDownloader(_clients : AzureBlobStorage = None_, _config : StorageConfiguration = None_, _start_range : int | None = None_, _end_range : int | None = None_, _validate_content : bool = None_, _encryption_options : Dict[str, Any] = None_, _max_concurrency : int = 1_, _name : str = None_, _container : str = None_, _encoding : str | None = None_, _download_cls : Callable | None = None_, _** kwargs: Any_)[source]¶
A streaming object to download from Azure Storage.
chunks() → Iterator[bytes][source]¶
Iterate over chunks in the download stream. Note, the iterator returned will
iterate over the entire download content, regardless of any data that was
previously read.
NOTE: If the stream has been partially read, some data may be re-downloaded by
the iterator.
Returns:
An iterator of the chunks in the download stream.
Return type:
Iterator[bytes]
Example:
Download a blob using chunks().¶
# This returns a StorageStreamDownloader.
stream = source_blob_client.download_blob()
block_list = []
# Read data in chunks to avoid loading all into memory at once
for chunk in stream.chunks():
# process your data (anything can be done here really. `chunk` is a byte array).
block_id = str(uuid.uuid4())
destination_blob_client.stage_block(block_id=block_id, data=chunk)
block_list.append(BlobBlock(block_id=block_id))
content_as_bytes(_max_concurrency =1_)[source]¶
DEPRECATED: Download the contents of this file.
This operation is blocking until all data is downloaded.
This method is deprecated, use func:readall instead.
Parameters:
**max_concurrency** (_int_) – The number of parallel connections with which to
download.
Returns:
The contents of the file as bytes.
Return type:
bytes
content_as_text(_max_concurrency =1_, _encoding ='UTF-8'_)[source]¶
DEPRECATED: Download the contents of this blob, and decode as text.
This operation is blocking until all data is downloaded.
This method is deprecated, use func:readall instead.
Parameters:
* **max_concurrency** (_int_) – The number of parallel connections with which to download.
* **encoding** (_str_) – Test encoding to decode the downloaded bytes. Default is UTF-8.
Returns:
The content of the file as a str.
Return type:
str
download_to_stream(_stream_ , _max_concurrency =1_)[source]¶
DEPRECATED: Download the contents of this blob to a stream.
This method is deprecated, use func:readinto instead.
Parameters:
* **stream** (_IO_ _[__T_ _]_) – The stream to download to. This can be an open file-handle, or any writable stream. The stream must be seekable if the download uses more than one parallel connection.
* **max_concurrency** (_int_) – The number of parallel connections with which to download.
Returns:
The properties of the downloaded blob.
Return type:
Any
read(_size : int = -1_) → T[source]¶
read(_*_ , _chars : int | None = None_) → T
Read the specified bytes or chars from the stream. If encoding was specified
on download_blob, it is recommended to use the chars parameter to read a
specific number of chars to avoid decoding errors. If size/chars is
unspecified or negative all bytes will be read.
Parameters:
**size** (_int_) – The number of bytes to download from the stream. Leave
unspecified or set negative to download all bytes.
Keyword Arguments:
**chars** (_Optional_ _[__int_ _]_) – The number of chars to download from the
stream. Leave unspecified or set negative to download all chars. Note, this
can only be used when encoding is specified on download_blob.
Returns:
The requested data as bytes or a string if encoding was specified. If the
return value is empty, there is no more data to read.
Return type:
T
readall() → T[source]¶
Read the entire contents of this blob. This operation is blocking until all
data is downloaded.
Returns:
The requested data as bytes or a string if encoding was specified.
Return type:
T
readinto(_stream : IO[bytes]_) → int[source]¶
Download the contents of this file to a stream.
Parameters:
**stream** (_IO_ _[__bytes_ _]_) – The stream to download to. This can be an
open file-handle, or any writable stream. The stream must be seekable if the
download uses more than one parallel connection.
Returns:
The number of bytes read.
Return type:
int
container _: str_¶
The name of the container where the blob is.
name _: str_¶
The name of the blob being downloaded.
properties _: BlobProperties_¶
The properties of the blob being downloaded. If only a range of the data is
being downloaded, this will be reflected in the properties.
size _: int_¶
The size of the total data in the stream. This will be the byte range if
specified, otherwise the total size of the blob.
_class _azure.storage.blob.UserDelegationKey[source]¶
Represents a user delegation key, provided to the user by Azure Storage based
on their Azure Active Directory access token.
The fields are saved as simple strings since the user does not have to
interact with this object; to generate an identify SAS, the user can simply
pass it to the right API.
signed_expiry _: str | None_ _ = None_¶
The datetime this token expires.
signed_oid _: str | None_ _ = None_¶
Object ID of this token.
signed_service _: str | None_ _ = None_¶
What service this key is valid for.
signed_start _: str | None_ _ = None_¶
The datetime this token becomes valid.
signed_tid _: str | None_ _ = None_¶
Tenant ID of the tenant that issued this token.
signed_version _: str | None_ _ = None_¶
The version identifier of the REST service that created this token.
value _: str | None_ _ = None_¶
The user delegation key.
azure.storage.blob.download_blob_from_url(_blob_url : str_, _output : str | IO[bytes]_, _credential : str | Dict[str, str] | AzureNamedKeyCredential | AzureSasCredential | TokenCredential | None = None_, _** kwargs: Any_) → None[source]¶
Download the contents of a blob to a local file or stream.
Parameters:
* **blob_url** (_str_) – The full URI to the blob. This can also include a SAS token.
* **output** (_str_ _or_ _writable stream._) – Where the data should be downloaded to. This could be either a file path to write to, or an open IO handle to write to.
* **credential** (_AzureNamedKeyCredential_ _or_ _AzureSasCredential_ _or_ _TokenCredential_ _or_ _str_ _or_ _dict_ _[__str_ _,__str_ _] or_ _None_) – The credentials with which to authenticate. This is optional if the blob URL already has a SAS token or the blob is public. The value can be a SAS token string, an instance of a AzureSasCredential or AzureNamedKeyCredential from azure.core.credentials, an account shared access key, or an instance of a TokenCredentials class from azure.identity. If the resource URI already contains a SAS token, this will be ignored in favor of an explicit credential \- except in the case of AzureSasCredential, where the conflicting SAS tokens will raise a ValueError. If using an instance of AzureNamedKeyCredential, “name” should be the storage account name, and “key” should be the storage account key.
Keyword Arguments:
* **overwrite** (_bool_) – Whether the local file should be overwritten if it already exists. The default value is False \- in which case a ValueError will be raised if the file already exists. If set to True, an attempt will be made to write to the existing file. If a stream handle is passed in, this value is ignored.
* **max_concurrency** (_int_) – The number of parallel connections with which to download.
* **offset** (_int_) – Start of byte range to use for downloading a section of the blob. Must be set if length is provided.
* **length** (_int_) – Number of bytes to read from the stream. This is optional, but should be supplied for optimal performance.
* **validate_content** (_bool_) – If true, calculates an MD5 hash for each chunk of the blob. The storage service checks the hash of the content that has arrived with the hash that was sent. This is primarily valuable for detecting bitflips on the wire if using http instead of https as https (the default) will already validate. Note that this MD5 hash is not stored with the blob. Also note that if enabled, the memory-efficient upload algorithm will not be used, because computing the MD5 hash requires buffering entire blocks, and doing so defeats the purpose of the memory-efficient algorithm.
Return type:
None
azure.storage.blob.generate_account_sas(_account_name: str_, _account_key: str_, _resource_types: ResourceTypes | str_, _permission: AccountSasPermissions | str_, _expiry: datetime | str_, _start: datetime | str | None = None_, _ip: str | None = None_, _*_ , _services: ~azure.storage.blob._shared.models.Services | str = <azure.storage.blob._shared.models.Services object>_, _**kwargs: ~typing.Any_) → str[source]¶
Generates a shared access signature for the blob service.
Use the returned signature with the credential parameter of any
BlobServiceClient, ContainerClient or BlobClient.
Parameters:
* **account_name** (_str_) – The storage account name used to generate the shared access signature.
* **account_key** (_str_) – The account key, also called shared key or access key, to generate the shared access signature.
* **resource_types** (_str_ _or_ _ResourceTypes_) – Specifies the resource types that are accessible with the account SAS.
* **permission** (_str_ _or_ _AccountSasPermissions_) – The permissions associated with the shared access signature. The user is restricted to operations allowed by the permissions.
* **expiry** (_datetime_ _or_ _str_) – The time at which the shared access signature becomes invalid. The provided datetime will always be interpreted as UTC.
* **start** (_datetime_ _or_ _str_) – The time at which the shared access signature becomes valid. If omitted, start time for this call is assumed to be the time when the storage service receives the request. The provided datetime will always be interpreted as UTC.
* **ip** (_str_) – Specifies an IP address or a range of IP addresses from which to accept requests. If the IP address from which the request originates does not match the IP address or address range specified on the SAS token, the request is not authenticated. For example, specifying ip=168.1.5.65 or ip=168.1.5.60-168.1.5.70 on the SAS restricts the request to those IP addresses.
Keyword Arguments:
* **services** (_Union_ _[__Services_ _,__str_ _]_) – Specifies the services that the Shared Access Signature (sas) token will be able to be utilized with. Will default to only this package (i.e. blobs) if not provided.
* **protocol** (_str_) – Specifies the protocol permitted for a request made. The default value is https.
* **encryption_scope** (_str_) – Specifies the encryption scope for a request made so that all write operations will be service encrypted.
Returns:
A Shared Access Signature (sas) token.
Return type:
str
Example:
Generating a shared access signature.¶
# Create a SAS token to use to authenticate a new client
from datetime import datetime, timedelta
from azure.storage.blob import ResourceTypes, AccountSasPermissions, generate_account_sas
sas_token = generate_account_sas(
blob_service_client.account_name,
account_key=blob_service_client.credential.account_key,
resource_types=ResourceTypes(object=True),
permission=AccountSasPermissions(read=True),
expiry=datetime.utcnow() + timedelta(hours=1)
)
azure.storage.blob.generate_blob_sas(_account_name : str_, _container_name : str_, _blob_name : str_, _snapshot : str | None = None_, _account_key : str | None = None_, _user_delegation_key : UserDelegationKey | None = None_, _permission : BlobSasPermissions | str | None = None_, _expiry : datetime | str | None = None_, _start : datetime | str | None = None_, _policy_id : str | None = None_, _ip : str | None = None_, _** kwargs: Any_) → str[source]¶
Generates a shared access signature for a blob.
Use the returned signature with the credential parameter of any
BlobServiceClient, ContainerClient or BlobClient.
Parameters:
* **account_name** (_str_) – The storage account name used to generate the shared access signature.
* **container_name** (_str_) – The name of the container.
* **blob_name** (_str_) – The name of the blob.
* **snapshot** (_str_) – An optional blob snapshot ID.
* **account_key** (_str_) – The account key, also called shared key or access key, to generate the shared access signature. Either account_key or user_delegation_key must be specified.
* **user_delegation_key** (_UserDelegationKey_) – Instead of an account shared key, the user could pass in a user delegation key. A user delegation key can be obtained from the service by authenticating with an AAD identity; this can be accomplished by calling `get_user_delegation_key()`. When present, the SAS is signed with the user delegation key instead.
* **permission** (_str_ _or_ _BlobSasPermissions_) – The permissions associated with the shared access signature. The user is restricted to operations allowed by the permissions. Permissions must be ordered racwdxytmei. Required unless an id is given referencing a stored access policy which contains this field. This field must be omitted if it has been specified in an associated stored access policy.
* **expiry** (_datetime_ _or_ _str_) – The time at which the shared access signature becomes invalid. Required unless an id is given referencing a stored access policy which contains this field. This field must be omitted if it has been specified in an associated stored access policy. Azure will always convert values to UTC. If a date is passed in without timezone info, it is assumed to be UTC.
* **start** (_datetime_ _or_ _str_) – The time at which the shared access signature becomes valid. If omitted, start time for this call is assumed to be the time when the storage service receives the request. The provided datetime will always be interpreted as UTC.
* **policy_id** (_str_) – A unique value up to 64 characters in length that correlates to a stored access policy. To create a stored access policy, use `set_container_access_policy()`.
* **ip** (_str_) – Specifies an IP address or a range of IP addresses from which to accept requests. If the IP address from which the request originates does not match the IP address or address range specified on the SAS token, the request is not authenticated. For example, specifying ip=168.1.5.65 or ip=168.1.5.60-168.1.5.70 on the SAS restricts the request to those IP addresses.
Keyword Arguments:
* **version_id** (_str_) –
An optional blob version ID. This parameter is only applicable for versioning-
enabled Storage accounts. Note that the ‘versionid’ query parameter is not
included in the output SAS. Therefore, please provide the ‘version_id’
parameter to any APIs when using the output SAS to operate on a specific
version.
Added in version 12.4.0: This keyword argument was introduced in API version
‘2019-12-12’.
* **protocol** (_str_) – Specifies the protocol permitted for a request made. The default value is https.
* **cache_control** (_str_) – Response header value for Cache-Control when resource is accessed using this shared access signature.
* **content_disposition** (_str_) – Response header value for Content-Disposition when resource is accessed using this shared access signature.
* **content_encoding** (_str_) – Response header value for Content-Encoding when resource is accessed using this shared access signature.
* **content_language** (_str_) – Response header value for Content-Language when resource is accessed using this shared access signature.
* **content_type** (_str_) – Response header value for Content-Type when resource is accessed using this shared access signature.
* **encryption_scope** (_str_) – Specifies the encryption scope for a request made so that all write operations will be service encrypted.
* **correlation_id** (_str_) – The correlation id to correlate the storage audit logs with the audit logs used by the principal generating and distributing the SAS. This can only be used when generating a SAS with delegation key.
Returns:
A Shared Access Signature (sas) token.
Return type:
str
azure.storage.blob.generate_container_sas(_account_name : str_, _container_name : str_, _account_key : str | None = None_, _user_delegation_key : UserDelegationKey | None = None_, _permission : ContainerSasPermissions | str | None = None_, _expiry : datetime | str | None = None_, _start : datetime | str | None = None_, _policy_id : str | None = None_, _ip : str | None = None_, _** kwargs: Any_) → str[source]¶
Generates a shared access signature for a container.
Use the returned signature with the credential parameter of any
BlobServiceClient, ContainerClient or BlobClient.
Parameters:
* **account_name** (_str_) – The storage account name used to generate the shared access signature.
* **container_name** (_str_) – The name of the container.
* **account_key** (_str_) – The account key, also called shared key or access key, to generate the shared access signature. Either account_key or user_delegation_key must be specified.
* **user_delegation_key** (_UserDelegationKey_) – Instead of an account shared key, the user could pass in a user delegation key. A user delegation key can be obtained from the service by authenticating with an AAD identity; this can be accomplished by calling `get_user_delegation_key()`. When present, the SAS is signed with the user delegation key instead.
* **permission** (_str_ _or_ _ContainerSasPermissions_) – The permissions associated with the shared access signature. The user is restricted to operations allowed by the permissions. Permissions must be ordered racwdxyltfmei. Required unless an id is given referencing a stored access policy which contains this field. This field must be omitted if it has been specified in an associated stored access policy.
* **expiry** (_datetime_ _or_ _str_) – The time at which the shared access signature becomes invalid. Required unless an id is given referencing a stored access policy which contains this field. This field must be omitted if it has been specified in an associated stored access policy. Azure will always convert values to UTC. If a date is passed in without timezone info, it is assumed to be UTC.
* **start** (_datetime_ _or_ _str_) – The time at which the shared access signature becomes valid. If omitted, start time for this call is assumed to be the time when the storage service receives the request. The provided datetime will always be interpreted as UTC.
* **policy_id** (_str_) – A unique value up to 64 characters in length that correlates to a stored access policy. To create a stored access policy, use `set_container_access_policy()`.
* **ip** (_str_) – Specifies an IP address or a range of IP addresses from which to accept requests. If the IP address from which the request originates does not match the IP address or address range specified on the SAS token, the request is not authenticated. For example, specifying ip=168.1.5.65 or ip=168.1.5.60-168.1.5.70 on the SAS restricts the request to those IP addresses.
Keyword Arguments:
* **protocol** (_str_) – Specifies the protocol permitted for a request made. The default value is https.
* **cache_control** (_str_) – Response header value for Cache-Control when resource is accessed using this shared access signature.
* **content_disposition** (_str_) – Response header value for Content-Disposition when resource is accessed using this shared access signature.
* **content_encoding** (_str_) – Response header value for Content-Encoding when resource is accessed using this shared access signature.
* **content_language** (_str_) – Response header value for Content-Language when resource is accessed using this shared access signature.
* **content_type** (_str_) – Response header value for Content-Type when resource is accessed using this shared access signature.
* **encryption_scope** (_str_) – Specifies the encryption scope for a request made so that all write operations will be service encrypted.
* **correlation_id** (_str_) – The correlation id to correlate the storage audit logs with the audit logs used by the principal generating and distributing the SAS. This can only be used when generating a SAS with delegation key.
Returns:
A Shared Access Signature (sas) token.
Return type:
str
Example:
Generating a sas token.¶
# Use access policy to generate a sas token
from azure.storage.blob import generate_container_sas
sas_token = generate_container_sas(
container_client.account_name,
container_client.container_name,
account_key=container_client.credential.account_key,
policy_id='my-access-policy-id'
)
azure.storage.blob.upload_blob_to_url(_blob_url : str_, _data : Iterable | IO_, _credential : str | Dict[str, str] | AzureNamedKeyCredential | AzureSasCredential | TokenCredential | None = None_, _** kwargs: Any_) → Dict[str, Any][source]¶
Upload data to a given URL
The data will be uploaded as a block blob.
Parameters:
* **blob_url** (_str_) – The full URI to the blob. This can also include a SAS token.
* **data** (_bytes_ _or_ _str_ _or_ _Iterable_) – The data to upload. This can be bytes, text, an iterable or a file-like object.
* **credential** (_AzureNamedKeyCredential_ _or_ _AzureSasCredential_ _or_ _TokenCredential_ _or_ _str_ _or_ _dict_ _[__str_ _,__str_ _] or_ _None_) – The credentials with which to authenticate. This is optional if the blob URL already has a SAS token. The value can be a SAS token string, an instance of a AzureSasCredential or AzureNamedKeyCredential from azure.core.credentials, an account shared access key, or an instance of a TokenCredentials class from azure.identity. If the resource URI already contains a SAS token, this will be ignored in favor of an explicit credential \- except in the case of AzureSasCredential, where the conflicting SAS tokens will raise a ValueError. If using an instance of AzureNamedKeyCredential, “name” should be the storage account name, and “key” should be the storage account key.
Keyword Arguments:
* **overwrite** (_bool_) – Whether the blob to be uploaded should overwrite the current data. If True, upload_blob_to_url will overwrite any existing data. If set to False, the operation will fail with a ResourceExistsError.
* **max_concurrency** (_int_) – The number of parallel connections with which to download.
* **length** (_int_) – Number of bytes to read from the stream. This is optional, but should be supplied for optimal performance.
* **metadata** (_dict_ _(__str_ _,__str_ _)_) – Name-value pairs associated with the blob as metadata.
* **validate_content** (_bool_) – If true, calculates an MD5 hash for each chunk of the blob. The storage service checks the hash of the content that has arrived with the hash that was sent. This is primarily valuable for detecting bitflips on the wire if using http instead of https as https (the default) will already validate. Note that this MD5 hash is not stored with the blob. Also note that if enabled, the memory-efficient upload algorithm will not be used, because computing the MD5 hash requires buffering entire blocks, and doing so defeats the purpose of the memory-efficient algorithm.
* **encoding** (_str_) – Encoding to use if text is supplied as input. Defaults to UTF-8.
Returns:
Blob-updated property dict (Etag and last modified)
Return type:
dict(str, Any)
## Subpackages¶
* azure.storage.blob.aio package
* `BlobClient`
* `BlobClient.abort_copy()`
* `BlobClient.acquire_lease()`
* `BlobClient.append_block()`
* `BlobClient.append_block_from_url()`
* `BlobClient.clear_page()`
* `BlobClient.close()`
* `BlobClient.commit_block_list()`
* `BlobClient.create_append_blob()`
* `BlobClient.create_page_blob()`
* `BlobClient.create_snapshot()`
* `BlobClient.delete_blob()`
* `BlobClient.delete_immutability_policy()`
* `BlobClient.download_blob()`
* `BlobClient.exists()`
* `BlobClient.from_blob_url()`
* `BlobClient.from_connection_string()`
* `BlobClient.get_account_information()`
* `BlobClient.get_blob_properties()`
* `BlobClient.get_blob_tags()`
* `BlobClient.get_block_list()`
* `BlobClient.get_page_range_diff_for_managed_disk()`
* `BlobClient.get_page_ranges()`
* `BlobClient.list_page_ranges()`
* `BlobClient.resize_blob()`
* `BlobClient.seal_append_blob()`
* `BlobClient.set_blob_metadata()`
* `BlobClient.set_blob_tags()`
* `BlobClient.set_http_headers()`
* `BlobClient.set_immutability_policy()`
* `BlobClient.set_legal_hold()`
* `BlobClient.set_premium_page_blob_tier()`
* `BlobClient.set_sequence_number()`
* `BlobClient.set_standard_blob_tier()`
* `BlobClient.stage_block()`
* `BlobClient.stage_block_from_url()`
* `BlobClient.start_copy_from_url()`
* `BlobClient.undelete_blob()`
* `BlobClient.upload_blob()`
* `BlobClient.upload_blob_from_url()`
* `BlobClient.upload_page()`
* `BlobClient.upload_pages_from_url()`
* `BlobClient.api_version`
* `BlobClient.location_mode`
* `BlobClient.primary_endpoint`
* `BlobClient.primary_hostname`
* `BlobClient.secondary_endpoint`
* `BlobClient.secondary_hostname`
* `BlobClient.url`
* `BlobLeaseClient`
* `BlobLeaseClient.acquire()`
* `BlobLeaseClient.break_lease()`
* `BlobLeaseClient.change()`
* `BlobLeaseClient.release()`
* `BlobLeaseClient.renew()`
* `BlobLeaseClient.etag`
* `BlobLeaseClient.id`
* `BlobLeaseClient.last_modified`
* `BlobPrefix`
* `BlobPrefix.by_page()`
* `BlobPrefix.get()`
* `BlobPrefix.has_key()`
* `BlobPrefix.items()`
* `BlobPrefix.keys()`
* `BlobPrefix.update()`
* `BlobPrefix.values()`
* `BlobPrefix.command`
* `BlobPrefix.container`
* `BlobPrefix.current_page`
* `BlobPrefix.delimiter`
* `BlobPrefix.location_mode`
* `BlobPrefix.marker`
* `BlobPrefix.name`
* `BlobPrefix.next_marker`
* `BlobPrefix.prefix`
* `BlobPrefix.results_per_page`
* `BlobPrefix.service_endpoint`
* `BlobServiceClient`
* `BlobServiceClient.close()`
* `BlobServiceClient.create_container()`
* `BlobServiceClient.delete_container()`
* `BlobServiceClient.find_blobs_by_tags()`
* `BlobServiceClient.from_connection_string()`
* `BlobServiceClient.get_account_information()`
* `BlobServiceClient.get_blob_client()`
* `BlobServiceClient.get_container_client()`
* `BlobServiceClient.get_service_properties()`
* `BlobServiceClient.get_service_stats()`
* `BlobServiceClient.get_user_delegation_key()`
* `BlobServiceClient.list_containers()`
* `BlobServiceClient.set_service_properties()`
* `BlobServiceClient.undelete_container()`
* `BlobServiceClient.api_version`
* `BlobServiceClient.location_mode`
* `BlobServiceClient.primary_endpoint`
* `BlobServiceClient.primary_hostname`
* `BlobServiceClient.secondary_endpoint`
* `BlobServiceClient.secondary_hostname`
* `BlobServiceClient.url`
* `ContainerClient`
* `ContainerClient.acquire_lease()`
* `ContainerClient.close()`
* `ContainerClient.create_container()`
* `ContainerClient.delete_blob()`
* `ContainerClient.delete_blobs()`
* `ContainerClient.delete_container()`
* `ContainerClient.download_blob()`
* `ContainerClient.exists()`
* `ContainerClient.find_blobs_by_tags()`
* `ContainerClient.from_connection_string()`
* `ContainerClient.from_container_url()`
* `ContainerClient.get_account_information()`
* `ContainerClient.get_blob_client()`
* `ContainerClient.get_container_access_policy()`
* `ContainerClient.get_container_properties()`
* `ContainerClient.list_blob_names()`
* `ContainerClient.list_blobs()`
* `ContainerClient.set_container_access_policy()`
* `ContainerClient.set_container_metadata()`
* `ContainerClient.set_premium_page_blob_tier_blobs()`
* `ContainerClient.set_standard_blob_tier_blobs()`
* `ContainerClient.upload_blob()`
* `ContainerClient.walk_blobs()`
* `ContainerClient.api_version`
* `ContainerClient.location_mode`
* `ContainerClient.primary_endpoint`
* `ContainerClient.primary_hostname`
* `ContainerClient.secondary_endpoint`
* `ContainerClient.secondary_hostname`
* `ContainerClient.url`
* `ExponentialRetry`
* `ExponentialRetry.configure_retries()`
* `ExponentialRetry.get_backoff_time()`
* `ExponentialRetry.increment()`
* `ExponentialRetry.send()`
* `ExponentialRetry.sleep()`
* `ExponentialRetry.connect_retries`
* `ExponentialRetry.increment_base`
* `ExponentialRetry.initial_backoff`
* `ExponentialRetry.next`
* `ExponentialRetry.random_jitter_range`
* `ExponentialRetry.retry_read`
* `ExponentialRetry.retry_status`
* `ExponentialRetry.retry_to_secondary`
* `ExponentialRetry.total_retries`
* `LinearRetry`
* `LinearRetry.configure_retries()`
* `LinearRetry.get_backoff_time()`
* `LinearRetry.increment()`
* `LinearRetry.send()`
* `LinearRetry.sleep()`
* `LinearRetry.connect_retries`
* `LinearRetry.initial_backoff`
* `LinearRetry.next`
* `LinearRetry.random_jitter_range`
* `LinearRetry.retry_read`
* `LinearRetry.retry_status`
* `LinearRetry.retry_to_secondary`
* `LinearRetry.total_retries`
* `StorageStreamDownloader`
* `StorageStreamDownloader.chunks()`
* `StorageStreamDownloader.content_as_bytes()`
* `StorageStreamDownloader.content_as_text()`
* `StorageStreamDownloader.download_to_stream()`
* `StorageStreamDownloader.read()`
* `StorageStreamDownloader.readall()`
* `StorageStreamDownloader.readinto()`
* `StorageStreamDownloader.container`
* `StorageStreamDownloader.name`
* `StorageStreamDownloader.properties`
* `StorageStreamDownloader.size`
* `download_blob_from_url()`
* `upload_blob_to_url()`
Previous Next
* * *
© Copyright 2024, Microsoft.
Built with Sphinx using a theme provided by Read the Docs.
